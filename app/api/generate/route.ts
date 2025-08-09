import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { generateContent, ContentRequest } from '@/lib/openai'
import { z } from 'zod'

const generateSchema = z.object({
  subject: z.string().min(1),
  topic: z.string().min(1),
  age: z.number().min(4).max(12),
  questionCount: z.number().min(3).max(10),
  outputs: z.object({
    lesson: z.boolean(),
    puzzle: z.boolean(),
    coloring: z.boolean(),
  }),
})

export async function POST(request: NextRequest) {
  try {
    // Check for required environment variables
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'sk-dummy') {
      return NextResponse.json(
        { message: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()
    const requestData = generateSchema.parse(body)

    // Check if at least one output is selected
    const hasOutput = Object.values(requestData.outputs).some(Boolean)
    if (!hasOutput) {
      return NextResponse.json(
        { message: 'Please select at least one output type' },
        { status: 400 }
      )
    }

    // Get user and check quota
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { subscription: true },
    })

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      )
    }

    // Check generation limits
    const isUnlimited = user.subscription?.plan === 'monthly' || user.subscription?.plan === 'yearly'
    
    if (!isUnlimited && user.generationsUsed >= user.generationsLimit) {
      return NextResponse.json(
        { message: 'Generation limit reached. Please upgrade your plan.' },
        { status: 403 }
      )
    }

    // Generate content
    const content = await generateContent(requestData)

    // Save generation to database
    const generation = await prisma.generation.create({
      data: {
        userId: session.user.id,
        type: Object.keys(requestData.outputs).filter(key => requestData.outputs[key as keyof typeof requestData.outputs]).join(','),
        subject: requestData.subject,
        topic: requestData.topic,
        age: requestData.age,
        difficulty: getAgeGroup(requestData.age),
        content: JSON.parse(JSON.stringify(content)),
      },
    })

    // Update user's generation count
    if (!isUnlimited) {
      await prisma.user.update({
        where: { id: session.user.id },
        data: { generationsUsed: user.generationsUsed + 1 },
      })
    }

    return NextResponse.json({
      id: generation.id,
      content,
      generationsRemaining: isUnlimited ? -1 : user.generationsLimit - user.generationsUsed - 1,
    })

  } catch (error) {
    console.error('Generation error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid input', errors: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { message: 'Generation failed. Please try again.' },
      { status: 500 }
    )
  }
}

function getAgeGroup(age: number): string {
  if (age <= 5) return 'preschool'
  if (age <= 7) return 'early elementary'
  if (age <= 9) return 'elementary'
  return 'late elementary'
}
