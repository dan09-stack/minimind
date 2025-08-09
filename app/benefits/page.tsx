'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BenefitsPage() {
  const [activeCategory, setActiveCategory] = useState(0)

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
      },
      {
        icon: '🏆',
        title: 'Build Confidence',
        description: 'Success-oriented activities that make kids feel proud and excited about learning.',
        highlight: 'Confidence Boost'
      },
      {
        icon: '🎭',
        title: 'Choose Your Adventure',
        description: 'Pick any topic that sparks curiosity - from dinosaurs to space, art to science!',
        highlight: 'Unlimited Topics'
      },
      {
        icon: '🧩',
        title: 'Multiple Learning Styles',
        description: 'Visual, kinesthetic, and logical learners all get content that matches how they learn best.',
        highlight: 'All Learning Styles'
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
      },
      {
        icon: '📱',
        title: 'Use Anywhere',
        description: 'Digital content for tablets, printable PDFs for home, or share with grandparents easily.',
        highlight: 'Complete Flexibility'
      },
      {
        icon: '🏡',
        title: 'Screen Time Balance',
        description: 'Printable activities provide healthy alternatives to excessive screen time.',
        highlight: 'Offline Learning Too'
      },
      {
        icon: '📈',
        title: 'Track Progress',
        description: 'See what topics your child loves and build a library of their favorite learning content.',
        highlight: 'Learning History'
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
      },
      {
        icon: '🌍',
        title: 'Any Subject, Any Time',
        description: 'From math to social studies, science to art - create materials for every subject area.',
        highlight: 'Cross-Curricular'
      },
      {
        icon: '👥',
        title: 'Student Engagement',
        description: 'Fresh, personalized content keeps students excited and actively participating.',
        highlight: 'Higher Engagement'
      },
      {
        icon: '🏠',
        title: 'Parent Communication',
        description: 'Share custom learning activities with parents for seamless home-school connection.',
        highlight: 'Home-School Bridge'
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
      },
      {
        icon: '🔍',
        title: 'Research Skills',
        description: 'Learning about diverse topics develops curiosity and information-seeking behaviors.',
        highlight: 'Lifelong Learning'
      },
      {
        icon: '🤝',
        title: 'Social Skills',
        description: 'Content about friendship, emotions, and cooperation builds emotional intelligence.',
        highlight: 'EQ Development'
      },
      {
        icon: '🌟',
        title: 'Academic Foundation',
        description: 'Strong foundational knowledge across subjects prepares kids for future learning.',
        highlight: 'School Success'
      }
    ]
  }

  const comparisonData = [
    {
      category: 'Content Variety',
      traditional: 'Limited topics in workbooks',
      miniminds: 'Unlimited topics on demand',
      advantage: '10x more variety'
    },
    {
      category: 'Personalization',
      traditional: 'One-size-fits-all approach',
      miniminds: 'Tailored to exact age & interests',
      advantage: 'Perfect fit every time'
    },
    {
      category: 'Cost per Activity',
      traditional: '$2-5 per worksheet/book',
      miniminds: '$0.10 per generation',
      advantage: '95% cost savings'
    },
    {
      category: 'Creation Time',
      traditional: 'Hours of searching & preparing',
      miniminds: '30 seconds to generate',
      advantage: '99% time saved'
    },
    {
      category: 'Updates & Freshness',
      traditional: 'Same content gets boring',
      miniminds: 'New content every time',
      advantage: 'Always engaging'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-kids bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
            🎯 Amazing Benefits
          </h1>
          <p className="text-2xl font-comic text-gray-700 mb-8 leading-relaxed">
            Discover why families, teachers, and kids around the world
            <br />choose MiniMinds for their learning adventures! 🌟
          </p>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">👦👧</div>
                <div className="text-sm font-comic text-gray-600">Happy Kids</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-600">👨‍👩‍👧‍👦</div>
                <div className="text-sm font-comic text-gray-600">Grateful Parents</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-600">👩‍🏫</div>
                <div className="text-sm font-comic text-gray-600">Empowered Teachers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">🧠</div>
                <div className="text-sm font-comic text-gray-600">Better Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="font-comic">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-kids text-gray-800 mb-4">
              Benefits {categories[activeCategory].name} {categories[activeCategory].icon}
            </h2>
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
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4 font-kids text-center">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 font-comic text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-kids text-gray-800 mb-4">
              📊 MiniMinds vs Traditional Methods
            </h2>
            <p className="text-xl font-comic text-gray-600">
              See the dramatic difference MiniMinds makes in your learning experience
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary-200">
                    <th className="text-left py-4 px-6 font-kids text-lg text-gray-800">Feature</th>
                    <th className="text-center py-4 px-6 font-kids text-lg text-gray-600">📚 Traditional</th>
                    <th className="text-center py-4 px-6 font-kids text-lg text-primary-600">🚀 MiniMinds</th>
                    <th className="text-center py-4 px-6 font-kids text-lg text-green-600">✨ Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-primary-100 hover:bg-white/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-800 font-comic">{row.category}</td>
                      <td className="py-4 px-6 text-center text-gray-600 font-comic">{row.traditional}</td>
                      <td className="py-4 px-6 text-center text-primary-600 font-comic font-bold">{row.miniminds}</td>
                      <td className="py-4 px-6 text-center text-green-600 font-comic font-bold">{row.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-kids text-gray-800 mb-4">
              🔬 Science-Backed Learning Benefits
            </h2>
            <p className="text-lg font-comic text-gray-600 max-w-3xl mx-auto">
              Our approach is grounded in educational research and child development science
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-kids text-center">
                🧠 Cognitive Development
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <div>
                    <span className="font-bold text-gray-800">Neuroplasticity Enhancement:</span>
                    <span className="text-gray-600 font-comic"> Varied content creates new neural pathways</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <div>
                    <span className="font-bold text-gray-800">Working Memory:</span>
                    <span className="text-gray-600 font-comic"> Puzzles and games strengthen cognitive capacity</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <div>
                    <span className="font-bold text-gray-800">Executive Function:</span>
                    <span className="text-gray-600 font-comic"> Activities improve planning and problem-solving</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-kids text-center">
                ❤️ Emotional & Social Growth
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <div>
                    <span className="font-bold text-gray-800">Self-Efficacy:</span>
                    <span className="text-gray-600 font-comic"> Success builds confidence and motivation</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <div>
                    <span className="font-bold text-gray-800">Emotional Regulation:</span>
                    <span className="text-gray-600 font-comic"> Creative activities reduce stress and anxiety</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold text-xl mt-1">✓</span>
                  <div>
                    <span className="font-bold text-gray-800">Social Understanding:</span>
                    <span className="text-gray-600 font-comic"> Content explores relationships and empathy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-kids mb-6">
            🎁 Experience These Benefits Today!
          </h2>
          <p className="text-2xl font-comic mb-8 opacity-90">
            Join thousands of families already enjoying the MiniMinds advantage
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/auth/signup"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Start Free Trial
            </Link>
            <Link 
              href="/testimonials"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300"
            >
              💬 Read Success Stories
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold">Instant Results</div>
              <div className="text-sm opacity-80">See the difference immediately</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-bold">Perfect Match</div>
              <div className="text-sm opacity-80">Content that fits exactly</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">💡</div>
              <div className="font-bold">Proven Methods</div>
              <div className="text-sm opacity-80">Science-backed approach</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
