'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const sessionId = searchParams.get('session_id')
    
    if (sessionId) {
      // Verify the session with your backend
      fetch('/api/verify-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setSuccess(true)
        }
      })
      .catch(error => {
        console.error('Session verification error:', error)
      })
      .finally(() => {
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-spin">⭐</div>
          <p className="text-xl font-comic text-gray-600">Processing your subscription...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="card max-w-lg text-center">
        <div className="text-8xl mb-6">🎉</div>
        <h1 className="text-4xl font-kids text-gray-800 mb-4">
          Welcome to MiniMinds Premium!
        </h1>
        <p className="text-xl text-gray-600 font-comic mb-8">
          Your subscription is now active. Start creating unlimited amazing content for kids!
        </p>
        
        <div className="space-y-4">
          <Link href="/generator" className="block w-full btn-primary py-4 text-lg">
            🎨 Start Creating Content
          </Link>
          <Link href="/dashboard" className="block w-full btn-secondary py-3">
            📚 Go to Dashboard
          </Link>
        </div>

        <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-xl">
          <h3 className="font-bold text-gray-800 mb-2">What&apos;s Next?</h3>
          <ul className="text-sm text-gray-700 font-comic space-y-1">
            <li>✨ Create unlimited lessons, puzzles & coloring sheets</li>
            <li>📥 Download high-quality PDFs</li>
            <li>🎯 Access to all age groups (4-12 years)</li>
            <li>💬 Get priority support</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
