'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface PricingPlan {
  id: string
  name: string
  price: number
  interval: 'month' | 'year' | 'trial'
  features: string[]
  stripePriceId: string | null
}

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Trial',
    price: 0,
    interval: 'trial',
    stripePriceId: null,
    features: [
      '3 content generations',
      'All content types (lessons, puzzles, coloring)',
      'PDF downloads',
      'Age-appropriate content (4-12 years)',
      '24/7 support'
    ]
  },
  {
    id: 'monthly',
    name: 'Regular',
    price: 9.99,
    interval: 'month',
    stripePriceId: 'price_1RtrXcQ1jVoldL3MPgHpIGfv',
    features: [
      'Unlimited content generations',
      'All content types (lessons, puzzles, coloring)',
      'PDF downloads',
      'Age-appropriate content (4-12 years)',
      'Priority support'
    ]
  },
  {
    id: 'yearly',
    name: 'Regular',
    price: 99.99,
    interval: 'year',
    stripePriceId: 'price_1RtrXsQ1jVoldL3Mj3c4NadK',
    features: [
      'Unlimited content generations',
      'All content types (lessons, puzzles, coloring)',
      'PDF downloads',
      'Age-appropriate content (4-12 years)',
      'Priority support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 0,
    interval: 'year',
    stripePriceId: null,
    features: [
      'Everything in Regular',
      'Content history & library',
      'Advanced customization options',
      'Early access to new features'
    ]
  }
]

export default function Pricing() {
  const { data: session } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState('')
  const [billing, setBilling] = useState<'month' | 'year'>('month')

  const handleSubscribe = async (plan: PricingPlan) => {
    if (plan.stripePriceId === null) {
      // Free trial or coming soon
      if (plan.id === 'free') {
        router.push('/generate')
      }
      return
    }

    if (!session) {
      router.push('/auth/signin')
      return
    }

    setLoading(plan.id)

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: plan.stripePriceId,
          planName: plan.name,
        }),
      })

      if (response.ok) {
        const { url } = await response.json()
        window.location.href = url
      } else {
        alert('Failed to create checkout session')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading('')
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-kids text-gray-800 mb-4">
          🎯 Choose Your Plan
        </h1>
        <p className="text-xl text-gray-600 font-comic max-w-3xl mx-auto">
          Start with our free trial, then unlock unlimited creativity with our affordable plans!
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBilling('month')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                billing === 'month' ? 'bg-white text-gray-900 shadow' : 'text-gray-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('year')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                billing === 'year' ? 'bg-white text-gray-900 shadow' : 'text-gray-600'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {([
          plans.find(p=>p.id==='free'),
          billing==='month' ? plans.find(p=>p.id==='monthly') : plans.find(p=>p.id==='yearly'),
          plans.find(p=>p.id==='premium')
        ].filter(Boolean) as PricingPlan[]).map((plan) => (
          <div 
            key={plan.id} 
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4 border-transparent hover:border-primary-200 flex flex-col"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <div className="text-4xl font-kids text-primary-600 mb-1">
                {plan.id === 'free' ? (
                  <span className="text-green-600 font-extrabold">FREE</span>
                ) : plan.price > 0 ? (
                  <>
                    ${plan.price}
                    <span className="text-lg text-gray-600">/{plan.interval}</span>
                  </>
                ) : (
                  <span className="text-gray-600">Coming Soon</span>
                )}
              </div>
              {plan.id === 'free' && (
                <p className="text-sm text-green-600 font-semibold">🎁 Free trial available</p>
              )}
              {plan.interval === 'year' && plan.price > 0 && (
                <p className="text-sm text-green-600 font-semibold">Save $20 per year!</p>
              )}
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-lg">✓</span>
                  <span className="text-gray-700 font-comic">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSubscribe(plan)}
              disabled={loading === plan.id || (!plan.stripePriceId && plan.id !== 'free')}
              className={`w-full py-4 text-lg font-bold rounded-full transition-all duration-200 disabled:opacity-50 ${
                plan.id === 'free' ? 'btn-primary' : plan.id === 'monthly' || plan.id==='yearly' ? 'btn-primary' : 'btn-accent'
              }`}
            >
              {loading === plan.id ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </div>
              ) : !plan.stripePriceId && plan.id !== 'free' ? (
                '🔒 Coming Soon'
              ) : plan.id === 'free' ? (
                '🚀 Start Free Trial'
              ) : (
                '💎 Get Started'
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
