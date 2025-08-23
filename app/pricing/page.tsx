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
    name: 'Basic',
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
    name: 'Premium',
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
  const [billing, setBilling] = useState<'month' | 'year'>('month')

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

  const freePlan = plans.find((p) => p.id === 'free') as PricingPlan
  const monthlyPlan = plans.find((p) => p.interval === 'month' && p.id !== 'free') as PricingPlan | undefined
  const yearlyPlan = plans.find((p) => p.interval === 'year' && p.id !== 'free') as PricingPlan | undefined

  const basicForBilling: PricingPlan | undefined = billing === 'month'
    ? monthlyPlan
    : monthlyPlan
      ? { ...monthlyPlan, id: 'basic_year', interval: 'year', stripePriceId: '', price: 79.99 }
      : undefined

  const premiumForBilling: PricingPlan | undefined = billing === 'year'
    ? yearlyPlan
    : yearlyPlan
      ? { ...yearlyPlan, id: 'premium_month', interval: 'month', stripePriceId: '', price: 14.99 }
      : undefined

  const visiblePlans = [freePlan, basicForBilling, premiumForBilling].filter(Boolean) as PricingPlan[]
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-kids text-gray-800 mb-4">
          🎯 Choose Your Plan
        </h1>
        <p className="text-xl text-gray-600 font-comic max-w-3xl mx-auto">
          Start with our free trial of 7 prompts in 7 days, then unlock unlimited creativity with our affordable plans!
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
        {visiblePlans.map((plan) => (
          <div 
          key={plan.id} 
          className={`card relative hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 ${plan.popular ? 'ring-4 ring-primary-200' : ''}`}
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
              <div className="text-4xl font-kids text-primary-600 mb-1">
                {plan.id === 'free' ? (
                  <span className="text-green-600 font-extrabold">FREE</span>
                ) : plan.price > 0 ? (
                  <>
                    ${plan.price}
                    <span className="text-lg text-gray-600">/{plan.interval}</span>
                  </>
                ) : (
                  <span className="text-gray-600">TBA</span>
                )}
              </div>
              {plan.id === 'free' && (
                <p className="text-sm text-green-600 font-semibold">🎁 Free trial: 7 prompts in 7 days</p>
              )}
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
              disabled={loading === plan.id || !plan.stripePriceId}
              className={`w-full py-4 text-lg font-bold rounded-full transition-all duration-200 disabled:opacity-50 ${
                plan.id === 'free' ? 'btn-secondary' : plan.popular ? 'btn-primary' : 'btn-accent'
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
