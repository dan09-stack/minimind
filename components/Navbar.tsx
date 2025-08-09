'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // Show home section links when on home page or auth pages, but only if NOT logged in
  const showHomeSections = (pathname === '/' || pathname?.startsWith('/auth')) && !session

  return (
    <nav className="bg-white shadow-lg border-b-4 border-primary-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-3xl mr-2">🧠</div>
              <span className="font-kids text-2xl text-primary-600">MiniMinds</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {showHomeSections && (
              <>
                <a href="/#home" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors scroll-smooth">
                  Home
                </a>
                <a href="/#how-it-works" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors scroll-smooth">
                  How It Works
                </a>
                <a href="/#benefits" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors scroll-smooth">
                  Benefits
                </a>
                <a href="/#testimonials" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors scroll-smooth">
                  Testimonials
                </a>
                <a href="/#pricing" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors scroll-smooth">
                  Pricing
                </a>
              </>
            )}
            {session && !showHomeSections && (
              <>
                <Link href="/" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors">
                  Home
                </Link>
                <Link href="/generate" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors">
                  Generate
                </Link>
                <Link href="/dashboard" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors">
                  Dashboard
                </Link>
              </>
            )}
            {session && showHomeSections && (
              <>
                <Link href="/generate" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors">
                  Generate
                </Link>
                <Link href="/dashboard" className="text-gray-700 hover:text-primary-600 font-semibold transition-colors">
                  Dashboard
                </Link>
              </>
            )}
            
            {session ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Hi, {session.user?.name}</span>
                <button
                  onClick={() => signOut()}
                  className="btn-primary"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/auth/signin" className="text-gray-700 hover:text-primary-600 font-semibold">
                  Sign In
                </Link>
                <Link href="/auth/signup" className="btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {showHomeSections && (
              <>
                <a href="/#home" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold scroll-smooth" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
                <a href="/#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold scroll-smooth" onClick={() => setIsMenuOpen(false)}>
                  How It Works
                </a>
                <a href="/#benefits" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold scroll-smooth" onClick={() => setIsMenuOpen(false)}>
                  Benefits
                </a>
                <a href="/#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold scroll-smooth" onClick={() => setIsMenuOpen(false)}>
                  Testimonials
                </a>
                <a href="/#pricing" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold scroll-smooth" onClick={() => setIsMenuOpen(false)}>
                  Pricing
                </a>
              </>
            )}
            {session && !showHomeSections && (
              <>
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold">
                  Home
                </Link>
                <Link href="/generate" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold">
                  Generate
                </Link>
                <Link href="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold">
                  Dashboard
                </Link>
              </>
            )}
            {session && showHomeSections && (
              <>
                <Link href="/generate" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold">
                  Generate
                </Link>
                <Link href="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold">
                  Dashboard
                </Link>
              </>
            )}
            {session ? (
              <>
                <div className="px-3 py-2 text-gray-700">Hi, {session.user?.name}</div>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/signin" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold">
                  Sign In
                </Link>
                <Link href="/auth/signup" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
