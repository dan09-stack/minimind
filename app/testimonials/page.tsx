'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const testimonials = [
    {
      type: 'parent',
      name: 'Sarah Johnson',
      role: 'Mom of 6-year-old Emma',
      location: 'Seattle, WA',
      rating: 5,
      quote: "Emma went from dreading homework to asking for 'more learning games'! The personalized content is incredible - it's like having a private tutor who knows exactly what she needs.",
      highlight: 'Transformed homework time',
      avatar: '👩‍💼',
      story: 'Emma struggled with traditional worksheets, but MiniMinds coloring sheets about her favorite animals made learning about habitats exciting. Now she creates her own nature books!'
    },
    {
      type: 'teacher',
      name: 'Mr. Rodriguez',
      role: '3rd Grade Teacher',
      location: 'Austin, TX',
      rating: 5,
      quote: "As a teacher of 28 students with different learning levels, MiniMinds has been a game-changer. I can create differentiated content in minutes instead of hours.",
      highlight: 'Saves 10+ hours weekly',
      avatar: '👨‍🏫',
      story: 'When teaching about the solar system, I generated different difficulty levels for my advanced and struggling readers. Every student stayed engaged and learned at their own pace.'
    },
    {
      type: 'parent',
      name: 'Michael Chen',
      role: 'Dad of twins (age 8)',
      location: 'San Francisco, CA',
      rating: 5,
      quote: "My twins have completely different interests - one loves dinosaurs, the other space. MiniMinds lets me create content for both without any extra work!",
      highlight: 'Perfect for different interests',
      avatar: '👨‍💻',
      story: 'Instead of buying separate workbooks, I generate custom content for both kids. They even compete to see who can finish their personalized puzzles first!'
    },
    {
      type: 'parent',
      name: 'Lisa Thompson',
      role: 'Homeschool Mom',
      location: 'Denver, CO',
      rating: 5,
      quote: "Homeschooling three kids used to mean hours of prep work every night. Now I can create engaging lessons for all three in under 10 minutes!",
      highlight: 'Homeschool game-changer',
      avatar: '👩‍🏫',
      story: 'When my 5-year-old wanted to learn about butterflies, my 8-year-old about fractions, and my 10-year-old about Ancient Rome, I had all three lessons ready instantly.'
    },
    {
      type: 'teacher',
      name: 'Ms. Patel',
      role: 'Kindergarten Teacher',
      location: 'Miami, FL',
      rating: 5,
      quote: "My students' parents constantly ask where I get such engaging materials. MiniMinds has elevated my entire classroom experience!",
      highlight: 'Enhanced classroom engagement',
      avatar: '👩‍🏫',
      story: 'During our community helpers unit, I generated custom coloring sheets of firefighters, doctors, and teachers. The kids were so excited they wanted to take them home to share!'
    },
    {
      type: 'parent',
      name: 'David Miller',
      role: 'Single Dad of 9-year-old Jake',
      location: 'Phoenix, AZ',
      rating: 5,
      quote: "As a working single dad, I don't have time to create educational activities. MiniMinds gives Jake quality learning content while I handle everything else.",
      highlight: 'Perfect for busy parents',
      avatar: '👨‍💼',
      story: 'Jake was struggling with math confidence. I generated fun number puzzles about his favorite video game characters. Now he asks to do math!'
    },
    {
      type: 'parent',
      name: 'Amanda Foster',
      role: 'Mom of 4-year-old Zoe',
      location: 'Nashville, TN',
      rating: 5,
      quote: "Zoe has ADHD and traditional learning materials never held her attention. MiniMinds content keeps her focused and actually excited about learning!",
      highlight: 'Great for special needs',
      avatar: '👩‍🔬',
      story: 'Traditional coloring books bored Zoe in minutes. But when I created a coloring sheet about her stuffed elephant, she spent an hour coloring and asking questions!'
    },
    {
      type: 'teacher',
      name: 'Mrs. Kim',
      role: '5th Grade Teacher',
      location: 'Portland, OR',
      rating: 5,
      quote: "Parent-teacher conferences have transformed! Parents see their child's interests reflected in learning materials and feel more connected to their education.",
      highlight: 'Improved parent engagement',
      avatar: '👩‍🏫',
      story: 'A shy student who never participated started raising her hand constantly after I used her love of horses to create reading comprehension activities.'
    }
  ]

  const stats = [
    { number: '98%', label: 'Kids ask for more', icon: '😊' },
    { number: '15hrs', label: 'Saved per week', icon: '⏰' },
    { number: '4.9/5', label: 'Parent rating', icon: '⭐' },
    { number: '92%', label: 'Improved engagement', icon: '📈' }
  ]

  const filters = [
    { id: 'all', name: 'All Stories', icon: '💫' },
    { id: 'parent', name: 'Parents', icon: '👨‍👩‍👧‍👦' },
    { id: 'teacher', name: 'Teachers', icon: '👩‍🏫' }
  ]

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.type === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-kids bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
            💬 Success Stories
          </h1>
          <p className="text-2xl font-comic text-gray-700 mb-8 leading-relaxed">
            Real families, real teachers, real results! 
            <br />Discover how MiniMinds is transforming learning experiences worldwide 🌟
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-lg">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary-600 font-kids">{stat.number}</div>
                <div className="text-sm font-comic text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
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
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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

      {/* Video Testimonials Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-kids text-gray-800 mb-4">
              🎬 Hear It Directly from Families
            </h2>
            <p className="text-lg font-comic text-gray-600">
              Watch real parents and teachers share their MiniMinds experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-6 text-center">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎥</div>
                    <div className="text-sm font-comic text-gray-600">Video Coming Soon</div>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">
                  {index === 0 && "Teacher Success Story"}
                  {index === 1 && "Parent Transformation"}
                  {index === 2 && "Homeschool Journey"}
                </h3>
                <p className="text-sm text-gray-600 font-comic">
                  {index === 0 && "How MiniMinds revolutionized my classroom"}
                  {index === 1 && "From homework battles to learning joy"}
                  {index === 2 && "Making homeschool preparation effortless"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-kids text-gray-800 mb-4">
              🌟 Join the MiniMinds Community
            </h2>
            <p className="text-lg font-comic text-gray-600">
              Thousands of families have already discovered the joy of personalized learning
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🏠</div>
              <div className="text-2xl font-bold text-primary-600 font-kids mb-2">10,000+</div>
              <div className="text-gray-600 font-comic">Happy Families</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🏫</div>
              <div className="text-2xl font-bold text-secondary-600 font-kids mb-2">500+</div>
              <div className="text-gray-600 font-comic">Schools Using</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">📚</div>
              <div className="text-2xl font-bold text-accent-600 font-kids mb-2">50,000+</div>
              <div className="text-gray-600 font-comic">Lessons Created</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4">🌍</div>
              <div className="text-2xl font-bold text-green-600 font-kids mb-2">25+</div>
              <div className="text-gray-600 font-comic">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-kids mb-6">
            🎉 Ready to Create Your Success Story?
          </h2>
          <p className="text-2xl font-comic mb-8 opacity-90">
            Join thousands of families already experiencing the MiniMinds magic!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              href="/auth/signup"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎁 Start Your Free Trial
            </Link>
            <Link 
              href="/how-it-works"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300"
            >
              📖 See How It Works
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">⚡</div>
              <div className="font-bold">Instant Access</div>
              <div className="text-sm opacity-80">Start creating in 30 seconds</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">💳</div>
              <div className="font-bold">No Credit Card</div>
              <div className="text-sm opacity-80">Free trial, no strings attached</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-3xl mb-2">❤️</div>
              <div className="font-bold">Love Guarantee</div>
              <div className="text-sm opacity-80">Join the happy families above</div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Reviews */}
      <div className="fixed bottom-8 right-8 z-10">
        <div className="bg-white rounded-full p-4 shadow-2xl border-2 border-primary-200 animate-bounce">
          <div className="text-center">
            <div className="text-2xl">⭐</div>
            <div className="text-xs font-bold text-primary-600">4.9/5</div>
            <div className="text-xs text-gray-500">Rating</div>
          </div>
        </div>
      </div>
    </div>
  )
}
