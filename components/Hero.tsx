import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="text-8xl mb-6 animate-bounce-slow">🌟</div>
          <h1 className="text-5xl md:text-6xl font-kids text-gray-800 mb-6">
            Learning Made
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500"> Fun!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-comic">
            Generate instant printable learning content, word puzzles, and coloring sheets 
            tailored perfectly for your child&apos;s age and interests!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/generator" className="btn-primary text-xl px-8 py-4">
              🎨 Start Creating
            </Link>
            <Link href="/auth/signup" className="btn-secondary text-xl px-8 py-4">
              📚 Free Trial
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mini Lessons</h3>
              <p className="text-gray-600">Age-appropriate educational content with quizzes</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🧩</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Word Puzzles</h3>
              <p className="text-gray-600">Custom word searches with lesson vocabulary</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Coloring Sheets</h3>
              <p className="text-gray-600">Beautiful illustrations related to any topic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
