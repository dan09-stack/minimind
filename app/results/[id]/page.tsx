'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useParams } from 'next/navigation'
import { PDFGenerator } from '@/components/PDFGenerator'

interface Generation {
  id: string
  type: string
  subject: string
  topic: string
  age: number
  content: any
  createdAt: string
}

export default function ResultsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const params = useParams()
  const [generation, setGeneration] = useState<Generation | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return // Still loading session
    
    if (!session) {
      router.push('/auth/signin')
      return
    }

    fetchGeneration()
  }, [session, status, params.id])

  const fetchGeneration = async () => {
    try {
      const response = await fetch(`/api/generations/${params.id}`)
      if (response.ok) {
        const data = await response.json()
        setGeneration(data)
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Error fetching generation:', error)
      router.push('/dashboard')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-spin">⭐</div>
          <p className="text-xl font-comic text-gray-600">Loading your amazing content...</p>
        </div>
      </div>
    )
  }

  if (!generation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <p className="text-xl font-comic text-gray-600">Content not found</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-kids text-gray-800 mb-2">
          🎉 Your Content is Ready!
        </h1>
        <p className="text-xl text-gray-600 font-comic">
          {generation.topic} • Age {generation.age} • {generation.subject}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content Preview */}
        <div className="space-y-6">
          {generation.content.lesson && (
            <div className="card">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📖</span>
                <h2 className="text-2xl font-bold text-gray-800">Mini Lesson</h2>
              </div>
              <h3 className="text-xl font-semibold mb-4">{generation.content.lesson.title}</h3>
              <div className="prose prose-sm mb-6">
                <p>{generation.content.lesson.content}</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-gray-800">Questions:</h4>
                {generation.content.lesson.questions.map((q: any, i: number) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-xl">
                    <p className="font-semibold mb-2">{i + 1}. {q.question}</p>
                    <div className="space-y-1">
                      {q.options.map((option: string, j: number) => (
                        <p key={j} className={`ml-4 ${j === q.correct ? 'text-green-600 font-semibold' : ''}`}>
                          {String.fromCharCode(65 + j)}. {option}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {generation.content.puzzle && (
            <div className="card">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🧩</span>
                <h2 className="text-2xl font-bold text-gray-800">Word Search</h2>
              </div>
              <h3 className="text-xl font-semibold mb-4">{generation.content.puzzle.title}</h3>
              <p className="mb-4">{generation.content.puzzle.instructions}</p>
              <div className="mb-4">
                <h4 className="font-bold mb-2">Words to find:</h4>
                <div className="grid grid-cols-3 gap-2">
                  {generation.content.puzzle.words.map((word: string, i: number) => (
                    <span key={i} className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-1 text-xs font-mono" style={{ gridTemplateColumns: `repeat(${generation.content.puzzle.grid.length}, 1fr)` }}>
                {generation.content.puzzle.grid.flat().map((letter: string, i: number) => (
                  <div key={i} className="w-6 h-6 border border-gray-300 flex items-center justify-center bg-white text-gray-800 font-bold">
                    {letter}
                  </div>
                ))}
              </div>
            </div>
          )}

          {generation.content.coloring && (
            <div className="card">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎨</span>
                <h2 className="text-2xl font-bold text-gray-800">Coloring Sheet</h2>
              </div>
              <h3 className="text-xl font-semibold mb-4">{generation.content.coloring.title}</h3>
              <p className="mb-4">{generation.content.coloring.description}</p>
              <img
                src={generation.content.coloring.imageUrl}
                alt={generation.content.coloring.title}
                className="w-full rounded-xl border"
              />
            </div>
          )}
        </div>

        {/* Download Options */}
        <div className="lg:sticky lg:top-8">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              📥 Download Your Content
            </h2>
            
            <PDFGenerator generation={generation} />
            
            <div className="mt-8 space-y-4">
              <button 
                onClick={() => router.push('/generator')}
                className="w-full btn-secondary py-3"
              >
                🎨 Create More Content
              </button>
              <button 
                onClick={() => router.push('/dashboard')}
                className="w-full btn-accent py-3"
              >
                📚 View All Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
