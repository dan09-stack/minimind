'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const { data: session } = useSession()
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
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
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen((v: boolean) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={isProfileOpen}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 border"
                >
                  <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center text-sm font-bold text-gray-800">
                    {session.user?.name?.[0]?.toUpperCase() || 'U'}
                  </span>
                  <span className="hidden lg:block text-gray-700 max-w-[140px] truncate">{session.user?.name || session.user?.email}</span>
                  <svg className="w-4 h-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.185l3.71-3.955a.75.75 0 111.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd"/></svg>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border rounded-xl shadow-lg py-2 z-50">
                    <div className="px-4 py-2 text-sm text-gray-600">Signed in as<br /><span className="font-semibold text-gray-800">{session.user?.email}</span></div>
                    <hr className="my-2" />
                    <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Link href="/help-center" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Help Center</Link>
                    <Link href="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Upgrade</Link>
                    <button onClick={() => signOut()} className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">Sign out</button>
                  </div>
                )}
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
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
              aria-expanded={isMobileOpen}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {showHomeSections && (
              <>
                <a href="/#home" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold scroll-smooth" onClick={() => setIsMobileOpen(false)}>
                  Home
                </a>
                <a href="/#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold scroll-smooth" onClick={() => setIsMobileOpen(false)}>
                  How It Works
                </a>
                <a href="/#benefits" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold scroll-smooth" onClick={() => setIsMobileOpen(false)}>
                  Benefits
                </a>
                <a href="/#testimonials" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold scroll-smooth" onClick={() => setIsMobileOpen(false)}>
                  Testimonials
                </a>
                <a href="/#pricing" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold scroll-smooth" onClick={() => setIsMobileOpen(false)}>
                  Pricing
                </a>
              </>
            )}
            {session && !showHomeSections && (
              <>
                <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold" onClick={() => setIsMobileOpen(false)}>
                  Home
                </Link>
                <Link href="/generate" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold" onClick={() => setIsMobileOpen(false)}>
                  Generate
                </Link>
                <Link href="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold" onClick={() => setIsMobileOpen(false)}>
                  Dashboard
                </Link>
              </>
            )}
            {session && showHomeSections && (
              <>
                <Link href="/generate" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold" onClick={() => setIsMobileOpen(false)}>
                  Generate
                </Link>
                <Link href="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold" onClick={() => setIsMobileOpen(false)}>
                  Dashboard
                </Link>
              </>
            )}
            {session ? (
              <>
                <div className="px-3 py-2 text-gray-700">Hi, {session.user?.name}</div>
                <button
                  onClick={() => { setIsMobileOpen(false); signOut() }}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/signin" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold" onClick={() => setIsMobileOpen(false)}>
                  Sign In
                </Link>
                <Link href="/auth/signup" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-semibold" onClick={() => setIsMobileOpen(false)}>
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
