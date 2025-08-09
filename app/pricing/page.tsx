'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface PricingPlan {
  id: string
  name: string
  price: number
  interval: 'month' | 'year'
  features: string[]
  stripePriceId: string
  popular?: boolean
}

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Trial',
    price: 0,
    interval: 'month',
    stripePriceId: '',
    features: [
      '5 content generations',
      'All content types (lessons, puzzles, coloring)',
      'PDF downloads',
      'Age-appropriate content (4-12 years)',
      'Basic support'
    ]
  },
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 9.99,
    interval: 'month',
    stripePriceId: 'price_1RtrWKQ1jVoldL3MWIQEsy6P', // Replace with your actual monthly price ID
    popular: true,
    features: [
      'Unlimited content generations',
      'All content types (lessons, puzzles, coloring)',
      'PDF downloads',
      'Age-appropriate content (4-12 years)',
      'Priority support',
      'Content history & library',
      'Advanced customization options'
    ]
  },
  {
    id: 'yearly',
    name: 'Yearly Plan',
    price: 99.99,
    interval: 'year',
    stripePriceId: 'price_1RtrXsQ1jVoldL3Mj3c4NadK', // Replace with your actual yearly price ID
    features: [
      'Unlimited content generations',
      'All content types (lessons, puzzles, coloring)',
      'PDF downloads',
      'Age-appropriate content (4-12 years)',
      'Priority support',
      'Content history & library',
      'Advanced customization options',
      '2 months FREE (Best Value!)'
    ]
  }
]

export default function Pricing() {
  const { data: session } = useSession()
  const router = useRouter()
  const [loading, setLoading] = useState('')

  const handleSubscribe = async (plan: PricingPlan) => {
    if (!session) {
      router.push('/auth/signin')
      return
    }

    if (plan.id === 'free') {
      router.push('/generator')
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-kids text-gray-800 mb-4">
          🎯 Choose Your Plan
        </h1>
        <p className="text-xl text-gray-600 font-comic max-w-3xl mx-auto">
          Start with our free trial, then unlock unlimited creativity with our affordable plans!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.id} 
            className={`card relative ${plan.popular ? 'ring-4 ring-primary-200 transform scale-105' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  ⭐ Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <div className="text-4xl font-kids text-primary-600 mb-2">
                ${plan.price}
                {plan.price > 0 && (
                  <span className="text-lg text-gray-600">/{plan.interval}</span>
                )}
              </div>
              {plan.interval === 'year' && plan.price > 0 && (
                <p className="text-sm text-green-600 font-semibold">
                  Save $20 per year!
                </p>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-lg">✓</span>
                  <span className="text-gray-700 font-comic">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleSubscribe(plan)}
              disabled={loading === plan.id}
              className={`w-full py-4 text-lg font-bold rounded-full transition-all duration-200 disabled:opacity-50 ${
                plan.popular
                  ? 'btn-primary'
                  : plan.id === 'free'
                  ? 'btn-secondary'
                  : 'btn-accent'
              }`}
            >
              {loading === plan.id ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </div>
              ) : plan.id === 'free' ? (
                '🚀 Start Free Trial'
              ) : (
                '💎 Get Started'
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">
          💝 Why Choose MiniMinds?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-3">🤖</div>
            <h4 className="font-bold text-gray-800 mb-2">AI-Powered</h4>
            <p className="text-gray-600 font-comic text-sm">Advanced AI creates perfect content for every age</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h4 className="font-bold text-gray-800 mb-2">Instant Results</h4>
            <p className="text-gray-600 font-comic text-sm">Get professional content in seconds, not hours</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🎨</div>
            <h4 className="font-bold text-gray-800 mb-2">Beautiful Design</h4>
            <p className="text-gray-600 font-comic text-sm">Print-ready PDFs that kids and parents love</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💰</div>
            <h4 className="font-bold text-gray-800 mb-2">Great Value</h4>
            <p className="text-gray-600 font-comic text-sm">Save hours of prep time for less than a coffee</p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          🎁 Special Launch Offer
        </h3>
        <p className="text-lg text-gray-700 font-comic mb-4">
          Get 50% off your first month! Use code <strong>LAUNCH50</strong>
        </p>
        <p className="text-sm text-gray-600">
          * Offer valid for new subscribers only. Limited time.
        </p>
      </div>
    </div>
  )
}
