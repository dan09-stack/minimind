'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function HomePage() {
  const { data: session } = useSession()
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const [activeCategory, setActiveCategory] = useState(0)
  const [loading, setLoading] = useState('')
  const [billing, setBilling] = useState<'month' | 'year'>('month')

  const features = [
    {
      icon: '📚',
      title: 'Interactive Lessons',
      description: 'Engaging mini-lessons tailored to your child\'s age and interests',
      color: 'from-secondary-100 to-secondary-200'
    },
    {
      icon: '🧩',
      title: 'Fun Puzzles',
      description: 'Word searches and brain teasers that make learn exciting',
      color: 'from-accent-100 to-accent-200'
    },
    {
      icon: '🎨',
      title: 'Coloring Sheets',
      description: 'Beautiful, educational coloring pages to spark creativity',
      color: 'from-primary-100 to-primary-200'
    },
    {
      icon: '🎯',
      title: 'Age-Appropriate',
      description: 'Content perfectly designed for ages 4-12 with difficulty scaling',
      color: 'from-primary-100 to-accent-100'
    }
  ]

  const stats = [
    { number: '10,000+', label: 'Happy Kids', icon: '😊' },
    { number: '50,000+', label: 'Lessons Created', icon: '📖' },
    { number: '25+', label: 'Subject Areas', icon: '🔬' },
    { number: '4.9/5', label: 'Parent Rating', icon: '⭐' }
  ]

  // How It Works Data
  const steps = [
    {
      step: 1,
      title: 'Choose Your Topic',
      description: 'Pick any subject your child is curious about - from dinosaurs to space, math to art!',
      icon: '🎯',
      color: 'from-primary-100 to-secondary-100'
    },
    {
      step: 2,
      title: 'Select Content Types',
      description: 'Mix and match lessons, puzzles, and coloring sheets for the perfect learning experience!',
      icon: '🧩',
      color: 'from-accent-100 to-accent-200'
    },
    {
      step: 3,
      title: 'AI Creates Magic',
      description: 'Our smart AI generates personalized, educational content in seconds!',
      icon: '✨',
      color: 'from-secondary-100 to-secondary-200'
    }
  ]

  // Benefits Data
  const categories = [
    { id: 0, name: 'For Kids', icon: '👦👧', color: 'from-secondary-100 to-secondary-200' },
    { id: 1, name: 'For Parents', icon: '👨‍👩‍👧‍👦', color: 'from-accent-100 to-accent-200' },
    { id: 2, name: 'For Teachers', icon: '👩‍🏫', color: 'from-primary-100 to-primary-200' },
    { id: 3, name: 'Learning Benefits', icon: '🧠', color: 'from-primary-100 to-accent-100' }
  ]

  const benefits = {
    0: [ // For Kids
      {
        icon: '🎯',
        title: 'Perfect Difficulty Level',
        description: 'Content automatically adjusts to your exact age and skill level - never too easy, never too hard!',
        highlight: 'Age 4-12 Optimized'
      },
      {
        icon: '🎨',
        title: 'Creative & Fun',
        description: 'Learning feels like playing with colorful designs, interactive puzzles, and engaging activities.',
        highlight: 'Pure Fun Factor'
      },
      {
        icon: '🌟',
        title: 'Instant Gratification',
        description: 'Get your personalized content in seconds - no waiting, just instant learning magic!',
        highlight: '30 Second Creation'
      }
    ],
    1: [ // For Parents
      {
        icon: '⏰',
        title: 'Save Time & Effort',
        description: 'No more hours searching for age-appropriate content or creating activities from scratch.',
        highlight: 'Minutes Not Hours'
      },
      {
        icon: '💰',
        title: 'Cost-Effective',
        description: 'Replace expensive workbooks, activity books, and educational materials with unlimited content.',
        highlight: 'Fraction of the Cost'
      },
      {
        icon: '🎯',
        title: 'Perfectly Personalized',
        description: 'Content created specifically for your child\'s interests, age, and learning needs.',
        highlight: 'Tailored for Your Child'
      }
    ],
    2: [ // For Teachers
      {
        icon: '📚',
        title: 'Lesson Plan Assistance',
        description: 'Quickly generate supplementary materials for any curriculum topic or unit.',
        highlight: 'Curriculum Support'
      },
      {
        icon: '🎨',
        title: 'Differentiated Learning',
        description: 'Create different difficulty levels for the same topic to meet all student needs.',
        highlight: 'Multi-Level Content'
      },
      {
        icon: '⚡',
        title: 'Emergency Activities',
        description: 'Need a last-minute activity? Generate engaging content in seconds for any situation.',
        highlight: 'Instant Resources'
      }
    ],
    3: [ // Learning Benefits
      {
        icon: '🧠',
        title: 'Critical Thinking',
        description: 'Puzzles and problem-solving activities develop analytical and reasoning skills.',
        highlight: 'Brain Development'
      },
      {
        icon: '📖',
        title: 'Reading Comprehension',
        description: 'Age-appropriate lessons improve vocabulary, understanding, and reading skills.',
        highlight: 'Literacy Skills'
      },
      {
        icon: '🎨',
        title: 'Creativity & Expression',
        description: 'Coloring sheets and creative activities nurture artistic development and self-expression.',
        highlight: 'Creative Growth'
      }
    ]
  }


  // Pricing Data
  const plans = [
    {
      id: 'free',
      name: 'Free Trial',
      price: 0,
      interval: 'trial',
      stripePriceId: null,
      features: [
        '5 content generations',
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
      stripePriceId: 'price_1RtrXcQ1jVoldL3MPgHpIGfv', // Replace with your actual monthly price ID
      popular: true,
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
      stripePriceId: 'price_1RtrXsQ1jVoldL3Mj3c4NadK', // Replace with your actual yearly price ID
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
       price: 0, // Coming soon
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
 
 
  const handleSubscribe = async (plan: typeof plans[0]) => {
    if (plan.stripePriceId === null) {
      // Handle free trial signup
      window.location.href = '/auth/signup'
      return
    }

    // Check if user is logged in before trying to checkout
    if (!session) {
      // Redirect to signup with plan info
      const signupUrl = `/auth/signup?plan=${plan.id}&priceId=${plan.stripePriceId}`
      window.location.href = signupUrl
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
        const errorData = await response.json()
        alert(`Failed to create checkout session: ${errorData.message || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Subscription error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading('')
    }
  }


   return (
    <div className="min-h-screen bg-white">
      {/* HOME SECTION */}
      <section id="home" className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-kids bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-6 leading-tight">
              MiniMinds 🧠✨
            </h1>
            <p className="text-2xl md:text-3xl font-comic text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Where AI meets creativity to make learning 
              <span className="text-primary-600 font-bold"> magical </span> 
              for kids aged 4-12! 🌟
            </p>
            
            {!session && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link 
                  href="/auth/signup"
                  className="bg-secondary-200 hover:bg-secondary-300 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🎉 Get Started Free!
                </Link>
                <Link 
                  href="/auth/signin"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🔑 Sign In
                </Link>
              </div>
            )}
            
            {session && (
              <div className="flex justify-center mb-12">
                <Link 
                  href="/generate"
                  className="btn-primary text-xl"
                >
                  🚀 Start Creating Now!
                </Link>
              </div>
            )}

            {/* Demo Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card rounded-xl p-6 text-center">
                    <div className="text-4xl mb-2">📚</div>
                    <h3 className="font-bold text-textPrimary">Mini Lesson</h3>
                    <p className="text-sm textPrimary">Interactive learning</p>
                  </div>
                  <div className="bg-card rounded-xl p-6 text-center">
                    <div className="text-4xl mb-2">🧩</div>
                    <h3 className="font-bold text-textPrimary">Word Puzzle</h3>
                    <p className="text-sm textPrimary">Brain training fun</p>
                  </div>
                  <div className="bg-card rounded-xl p-6 text-center">
                    <div className="text-4xl mb-2">🎨</div>
                    <h3 className="font-bold text-textPrimary">Coloring Sheet</h3>
                    <p className="text-sm textPrimary">Creative expression</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-kids text-gray-800 mb-4">
              🎯 Why Kids Love MiniMinds
            </h2>
            <p className="text-xl font-comic text-gray-600 max-w-3xl mx-auto">
              Every feature is designed to make learning feel like playing! 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transform transition-all duration-300 ${
                  hoveredFeature === index ? 'scale-105' : 'hover:scale-105'
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="bg-card rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border-4 border-transparent group-hover:border-primary-200">
                  <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-4xl mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 font-kids text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-comic text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🌟</div>
        <div className="absolute top-40 right-16 text-5xl animate-pulse">🎈</div>
        <div className="hidden md:block absolute bottom-20 left-20 text-4xl animate-bounce delay-100">🦄</div>
        <div className="hidden md:block absolute bottom-32 right-10 text-5xl animate-pulse delay-200">🌈</div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-6xl font-kids bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
            ⚡ How It Works
          </h2>
          <p className="text-2xl font-comic text-gray-700 mb-8 leading-relaxed">
            Creating magical learning experiences is as easy as 1-2-3! 
            <br />Let us show you the simple process that delights kids worldwide 🌟
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="bg-card rounded-3xl p-8 shadow-lg border-4 border-primary-100 text-center flex flex-col items-center justify-start h-64">
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-4xl mb-4`}>
                  {step.icon}
                </div>
                <span className="bg-primary-100 text-primary-600 font-bold px-3 py-1 rounded-full text-sm mb-2">
                  Step {step.step}
                </span>
                <h3 className="text-2xl font-bold text-gray-800 font-kids mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 font-comic text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-6xl font-kids bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
            🎯 Amazing Benefits
          </h2>
          <p className="text-2xl font-comic text-gray-700 mb-8 leading-relaxed">
            Discover why families, teachers, and kids around the world
            <br />choose MiniMinds for their learning adventures! 🌟
          </p>
        </div>

        {/* Category Navigation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="font-comic">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-kids text-gray-800 mb-4">
              Benefits {categories[activeCategory].name} {categories[activeCategory].icon}
            </h3>
            <p className="text-lg font-comic text-gray-600">
              See how MiniMinds makes a real difference in learning and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits[activeCategory as keyof typeof benefits]?.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-card rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-primary-200">
                  <div className={`w-16 h-16 bg-gradient-to-r ${categories[activeCategory].color} rounded-full flex items-center justify-center text-3xl mb-6 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-bold">
                      {benefit.highlight}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-800 mb-4 font-kids text-center">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-gray-600 font-comic text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-6xl font-kids bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
            💰 Choose Your Plan
          </h2>
          <p className="text-2xl font-comic text-gray-700 mb-8 leading-relaxed">
            Start with our free trial, then unlock unlimited creativity 
            <br />with our affordable plans! 🌟
          </p>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              <button onClick={() => setBilling('month')} className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${billing === 'month' ? 'bg-white text-gray-900 shadow' : 'text-gray-600'}`}>Monthly</button>
              <button onClick={() => setBilling('year')} className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${billing === 'year' ? 'bg-white text-gray-900 shadow' : 'text-gray-600'}`}>Yearly</button>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {([plans.find(p=>p.id==='free'),
               (billing==='month' ? plans.find(p=>p.id==='monthly') : plans.find(p=>p.id==='yearly')),
               plans.find(p=>p.id==='premium')
            ].filter(Boolean) as typeof plans).map((plan: any) => (
              <div key={plan.id} className="relative transform transition-transform duration-300 hover:scale-105">
                <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4 ${
                (plan.name === 'Regular' && plan.interval === billing) ? 'border-primary-300 shadow-2xl' : 'border-transparent hover:border-primary-200'
                } h-full flex flex-col`}>
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-kids text-primary-600 mb-2">
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
                    {plan.id==='free' && (
                      <p className="text-sm text-green-600 font-semibold">🎁 Free trial available</p>
                    )}
                    {plan.interval === 'year' && plan.price > 0 && (
                     <p className="text-sm text-green-600 font-semibold">
                         Save $20 per year!
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature: string, index: number) => (
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
                      plan.id === 'free' ? 'btn-primary' : plan.name === 'Regular' ? 'btn-primary' : 'btn-accent'
                    }`}
                  >
                    {loading === plan.id ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span className="animate-spin">⏳</span>
                        <span>Processing...</span>
                      </span>
                    ) : !plan.stripePriceId && plan.id !== 'free' ? (
                      '🔒 Coming Soon'
                    ) : plan.id==='free' ? (
                      '🚀 Start Free Trial'
                    ) : (
                      '💎 Get Started'
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-kids mb-6">
            🎉 Ready to Transform Learning?
          </h2>
          <p className="text-2xl font-comic mb-8 opacity-90">
            Join thousands of families already creating magical learning moments with MiniMinds!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {!session && (
              <Link 
                href="/auth/signup"
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🎁 Start Your Free Trial
              </Link>
            )}
            {session && (
              <Link 
                href="/generate"
                className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 Start Creating Now
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold">Instant Access</div>
              <div className="text-sm opacity-80">Start creating in 30 seconds</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">❤️</div>
              <div className="font-bold">Love Guarantee</div>
              <div className="text-sm opacity-80">Join happy families worldwide</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
  