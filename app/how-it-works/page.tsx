'use client'

import Link from 'next/link'

export default function HowItWorksPage() {

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

  const examples = [
    {
      topic: 'Ocean Animals',
      age: 6,
      outputs: ['Lesson', 'Puzzle', 'Coloring'],
      preview: {
        lesson: 'Learn about dolphins, whales, and sea turtles with fun facts!',
        puzzle: '15 ocean words hidden in an underwater grid',
        coloring: 'A friendly dolphin swimming with colorful fish'
      }
    },
    {
      topic: 'Solar System',
      age: 9,
      outputs: ['Lesson', 'Puzzle'],
      preview: {
        lesson: 'Explore planets, moons, and stars with cool science facts!',
        puzzle: 'Find planet names and space terms in this cosmic puzzle'
      }
    },
    {
      topic: 'Friendship',
      age: 5,
      outputs: ['Lesson', 'Coloring'],
      preview: {
        lesson: 'Discover what makes a good friend with simple stories',
        coloring: 'Two happy children playing together in a park'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-kids bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6">
            ⚡ How It Works
          </h1>
          <p className="text-2xl font-comic text-gray-700 mb-8 leading-relaxed">
            Creating magical learning experiences is as easy as 1-2-3! 
            <br />Let us show you the simple process that delights kids worldwide 🌟
          </p>
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-lg font-comic text-gray-600">
                ⏱️ <span className="font-bold text-primary-600">30 seconds</span> to create • 
                🎯 <span className="font-bold text-secondary-600">Personalized</span> content • 
                ♾️ <span className="font-bold text-accent-600">Unlimited</span> possibilities
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
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

      {/* Examples Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-kids text-gray-800 mb-4">
              🎨 Real Examples from Real Kids
            </h2>
            <p className="text-xl font-comic text-gray-600 max-w-3xl mx-auto">
              See the kind of amazing content our AI creates for different ages and interests!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full px-4 py-2 inline-block mb-3">
                    <span className="text-primary-600 font-bold">Age {example.age}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 font-kids mb-2">
                    {example.topic}
                  </h3>
                  <div className="flex justify-center space-x-2 mb-4">
                    {example.outputs.map((output, i) => (
                      <span key={i} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-comic">
                        {output}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  {example.preview.lesson && (
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">📚</span>
                        <span className="font-bold text-blue-800">Mini Lesson</span>
                      </div>
                      <p className="text-blue-700 font-comic text-sm">{example.preview.lesson}</p>
                    </div>
                  )}

                  {example.preview.puzzle && (
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">🧩</span>
                        <span className="font-bold text-green-800">Word Puzzle</span>
                      </div>
                      <p className="text-green-700 font-comic text-sm">{example.preview.puzzle}</p>
                    </div>
                  )}

                  {example.preview.coloring && (
                    <div className="bg-pink-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl">🎨</span>
                        <span className="font-bold text-pink-800">Coloring Sheet</span>
                      </div>
                      <p className="text-pink-700 font-comic text-sm">{example.preview.coloring}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-kids text-gray-800 mb-6">
            🎬 See It In Action!
          </h2>
          <p className="text-lg font-comic text-gray-600 mb-8">
            Watch how easy it is to create magical learning content in under 30 seconds
          </p>
          
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎥</div>
                <p className="text-xl font-comic text-gray-600">
                  Demo Video Coming Soon!
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Meanwhile, try it yourself with our free trial
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-kids mb-6">
            🚀 Ready to Get Started?
          </h2>
          <p className="text-2xl font-comic mb-8 opacity-90">
            Join thousands of families already creating magical learning moments!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/auth/signup"
              className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🎁 Start Free Trial
            </Link>
            <Link 
              href="/benefits"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-full text-xl transition-all duration-300"
            >
              📖 See Benefits
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
