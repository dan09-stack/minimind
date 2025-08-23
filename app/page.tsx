'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState } from 'react'

export default function HomePage() {
  const { data: session } = useSession()
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  const [activeCategory, setActiveCategory] = useState(0)
  const [activeFilter, setActiveFilter] = useState('all')
  const [loading, setLoading] = useState('')

  const features = [
    {
      icon: '📚',
      title: 'Interactive Lessons',
      description: 'Engaging mini-lessons tailored to your child\'s age and interests',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: '🧩',
      title: 'Fun Puzzles',
      description: 'Word searches and brain teasers that make learn exciting',
      color: 'from-green-400 to-blue-500'
    },
    {
      icon: '🎨',
      title: 'Coloring Sheets',
      description: 'Beautiful, educational coloring pages to spark creativity',
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: '🎯',
      title: 'Age-Appropriate',
      description: 'Content perfectly designed for ages 4-12 with difficulty scaling',
      color: 'from-yellow-400 to-orange-500'
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
      color: 'from-blue-400 to-purple-500'
    },
    {
      step: 2,
      title: 'Select Content Types',
      description: 'Mix and match lessons, puzzles, and coloring sheets for the perfect learning experience!',
      icon: '🧩',
      color: 'from-green-400 to-blue-500'
    },
    {
      step: 3,
      title: 'AI Creates Magic',
      description: 'Our smart AI generates personalized, educational content in seconds!',
      icon: '✨',
      color: 'from-pink-400 to-red-500'
    }
  ]

  // Benefits Data
  const categories = [
    { id: 0, name: 'For Kids', icon: '👦👧', color: 'from-blue-400 to-purple-500' },
    { id: 1, name: 'For Parents', icon: '👨‍👩‍👧‍👦', color: 'from-green-400 to-blue-500' },
    { id: 2, name: 'For Teachers', icon: '👩‍🏫', color: 'from-pink-400 to-red-500' },
    { id: 3, name: 'Learning Benefits', icon: '🧠', color: 'from-yellow-400 to-orange-500' }
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

  // Testimonials Data
  const testimonials = [
    {
      type: 'parent',
      name: 'Sarah Johnson',
      role: 'Mom of 6-year-old Emma',
      location: 'Seattle, WA',
      rating: 5,
      quote: "Emma went from dreading homework to asking for 'more learning games'! The personalized content is incredible.",
      highlight: 'Transformed homework time',
      avatar: '👩‍💼',
      story: 'Emma struggled with traditional worksheets, but MiniMinds coloring sheets about her favorite animals made learning exciting!'
    },
    {
      type: 'teacher',
      name: 'Mr. Rodriguez',
      role: '3rd Grade Teacher',
      location: 'Austin, TX',
      rating: 5,
      quote: "As a teacher of 28 students with different learning levels, MiniMinds has been a game-changer.",
      highlight: 'Saves 10+ hours weekly',
      avatar: '👨‍🏫',
      story: 'I can create differentiated content for my advanced and struggling readers in minutes instead of hours.'
    },
    {
      type: 'parent',
      name: 'Michael Chen',
      role: 'Dad of twins (age 8)',
      location: 'San Francisco, CA',
      rating: 5,
      quote: "My twins have completely different interests. MiniMinds lets me create content for both without any extra work!",
      highlight: 'Perfect for different interests',
      avatar: '👨‍💻',
      story: 'Instead of buying separate workbooks, I generate custom content for both kids. They compete to finish first!'
    }
  ]

  // Pricing Data
  const plans = [
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
      name: 'Monthly Plan',
      price: 9.99,
      interval: 'month',
      stripePriceId: 'price_1RtrXcQ1jVoldL3MPgHpIGfv', // Replace with your actual monthly price ID
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
        'Early access to new features'
      ]
    }
  ]

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.type === activeFilter)

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

  const displayPlans = plans.filter((p) => p.id === 'monthly' || p.id === 'yearly')
  
   return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
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
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🎉 Get Started Free!
                </Link>
                <Link 
                  href="/auth/signin"
                  className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300"
                >
                  🔑 Sign In
                </Link>
              </div>
            )}
            
            {session && (
              <div className="flex justify-center mb-12">
                <Link 
                  href="/generate"
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  🚀 Start Creating Now!
                </Link>
              </div>
            )}

            {/* Demo Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-2">📚</div>
                    <h3 className="font-bold text-blue-800">Mini Lesson</h3>
                    <p className="text-sm text-blue-600">Interactive learning</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-2">🧩</div>
                    <h3 className="font-bold text-green-800">Word Puzzle</h3>
                    <p className="text-sm text-green-600">Brain training fun</p>
                  </div>
                  <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl p-6 text-center">
                    <div className="text-4xl mb-2">🎨</div>
                    <h3 className="font-bold text-pink-800">Coloring Sheet</h3>
                    <p className="text-sm text-pink-600">Creative expression</p>
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
                <div className="bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-shadow duration-300 border-4 border-transparent group-hover:border-primary-200">
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

        {/* Stats Section */}
        <div className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-kids text-gray-800 mb-4">
              🏆 Trusted by Families Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 transform group-hover:scale-105">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary-600 font-kids mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-comic font-semibold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🌟</div>
        <div className="absolute top-40 right-16 text-5xl animate-pulse">🎈</div>
        <div className="absolute bottom-20 left-20 text-4xl animate-bounce delay-100">🦄</div>
        <div className="absolute bottom-32 right-10 text-5xl animate-pulse delay-200">🌈</div>
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
              <div key={step.step} className="bg-white rounded-3xl p-8 shadow-lg border-4 border-primary-100 text-center flex flex-col items-center justify-start h-64">
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
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
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
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-primary-200">
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

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-6xl font-kids bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
            💬 Success Stories
          </h2>
          <p className="text-2xl font-comic text-gray-700 mb-8 leading-relaxed">
            Real families, real teachers, real results! 
            <br />Discover how MiniMinds is transforming learning experiences worldwide 🌟
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'all', name: 'All Stories', icon: '💫' },
              { id: 'parent', name: 'Parents', icon: '👨‍👩‍👧‍👦' },
              { id: 'teacher', name: 'Teachers', icon: '👩‍🏫' }
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{filter.icon}</span>
                <span className="font-comic">{filter.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-primary-200 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 font-kids">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 font-comic">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">⭐</span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1 mb-6">
                    <div className="text-3xl text-primary-300 mb-2">&quot;</div>
                    <p className="text-gray-700 font-comic leading-relaxed mb-4 italic">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Highlight */}
                  <div className="mb-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      testimonial.type === 'parent' 
                        ? 'bg-pink-100 text-pink-600' 
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Story */}
                  <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-primary-300">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">📖</span>
                      <span className="font-bold text-gray-800 text-sm">Real Story</span>
                    </div>
                    <p className="text-gray-600 font-comic text-sm leading-relaxed">
                      {testimonial.story}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-6xl font-kids bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
            💰 Choose Your Plan
          </h2>
          <p className="text-2xl font-comic text-gray-700 mb-8 leading-relaxed">
            Start with our free trial, then unlock unlimited creativity 
            <br />with our affordable plans! 🌟
          </p>


        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {displayPlans.map((plan: any) => (
              <div key={plan.id} className="relative transform transition-transform duration-300 hover:scale-105">
                {plan.id === 'monthly' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-4 ${
                plan.id === 'monthly' ? 'border-primary-300 shadow-2xl' : 'border-transparent hover:border-primary-200'
                } h-full flex flex-col`}>
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-kids text-primary-600 mb-2">
                      ${plan.price}
                      {plan.price > 0 && (
                        <span className="text-lg text-gray-600">/{plan.interval}</span>
                      )}
                    </div>
                    <p className="text-sm text-green-600 font-semibold">
                    🎁 Free trial: 5 prompts
                    </p>
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
                    disabled={loading === plan.id}
                    className={`w-full py-4 text-lg font-bold rounded-full transition-all duration-200 disabled:opacity-50 ${
                      plan.id === 'monthly' ? 'btn-primary' : 'btn-accent'
                    }`}
                  >
                    {loading === plan.id ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span className="animate-spin">⏳</span>
                        <span>Processing...</span>
                      </span>
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
