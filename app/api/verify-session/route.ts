import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { getStripeSession } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { sessionId } = await request.json()

    if (!sessionId) {
      return NextResponse.json(
        { message: 'Session ID is required' },
        { status: 400 }
      )
    }

    // Retrieve the session from Stripe
    const stripeSession = await getStripeSession(sessionId)

    if (stripeSession.payment_status === 'paid' && stripeSession.client_reference_id === session.user.id) {
      // Update user's subscription
      const subscription = stripeSession.subscription as string
      
      await prisma.subscription.update({
        where: { userId: session.user.id },
        data: {
          stripeSubscriptionId: subscription,
          status: 'active',
          plan: stripeSession.metadata?.plan || 'monthly',
        },
      })

      // Update user's generation limit
      await prisma.user.update({
        where: { id: session.user.id },
        data: {
          generationsLimit: 999999, // Unlimited for paid plans
        },
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ success: false, message: 'Payment not completed' })
  } catch (error) {
    console.error('Session verification error:', error)
    return NextResponse.json(
      { message: 'Verification failed' },
      { status: 500 }
    )
  }
}
