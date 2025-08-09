'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface GeneratorForm {
  subject: string
  topic: string
  age: number
  questionCount: number
  outputs: {
    lesson: boolean
    puzzle: boolean
    coloring: boolean
  }
}

export function ContentGenerator() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [form, setForm] = useState<GeneratorForm>({
    subject: '',
    topic: '',
    age: 6,
    questionCount: 5,
    outputs: {
      lesson: true,
      puzzle: true,
      coloring: true
    }
  })
  const [isGenerating, setIsGenerating] = useState(false)

  const subjects = [
    'Science', 'Math', 'History', 'Geography', 'Art', 'Music', 
    'Language Arts', 'Nature', 'Animals', 'Space'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (status === 'loading') return // Still loading session
    
    if (!session) {
      router.push('/auth/signin')
      return
    }

    setIsGenerating(true)
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        const result = await response.json()
        router.push(`/results/${result.id}`)
      } else {
        const error = await response.json()
        alert(error.message || 'Generation failed')
      }
    } catch (error) {
      console.error('Generation error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const updateOutputs = (key: keyof typeof form.outputs) => {
    setForm(prev => ({
      ...prev,
      outputs: {
        ...prev.outputs,
        [key]: !prev.outputs[key]
      }
    }))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-kids text-gray-800 mb-4">
          🎯 Create Learning Content
        </h2>
        <p className="text-xl text-gray-600 font-comic">
          Tell us what you&apos;d like to teach, and we&apos;ll create amazing content!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card max-w-2xl mx-auto space-y-6">
        {/* Subject Selection */}
        <div>
          <label className="block text-lg font-bold text-gray-700 mb-2">
            📚 Subject
          </label>
          <select
            value={form.subject}
            onChange={(e) => setForm(prev => ({ ...prev, subject: e.target.value }))}
            className="input-field"
            required
          >
            <option value="">Choose a subject</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>

        {/* Topic Input */}
        <div>
          <label className="block text-lg font-bold text-gray-700 mb-2">
            💡 Topic
          </label>
          <input
            type="text"
            value={form.topic}
            onChange={(e) => setForm(prev => ({ ...prev, topic: e.target.value }))}
            placeholder="e.g., Solar System, Addition, Animals in Rainforest"
            className="input-field"
            required
          />
          <p className="text-sm text-gray-500 mt-1">Be specific for better results!</p>
        </div>

        {/* Age Selection */}
        <div>
          <label className="block text-lg font-bold text-gray-700 mb-2">
            👶 Child&apos;s Age
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="4"
              max="12"
              value={form.age}
              onChange={(e) => setForm(prev => ({ ...prev, age: parseInt(e.target.value) }))}
              className="flex-1"
            />
            <span className="text-2xl font-bold text-primary-600 min-w-[3rem]">
              {form.age}
            </span>
          </div>
        </div>

        {/* Question Count */}
        <div>
          <label className="block text-lg font-bold text-gray-700 mb-2">
            ❓ Number of Questions
          </label>
          <select
            value={form.questionCount}
            onChange={(e) => setForm(prev => ({ ...prev, questionCount: parseInt(e.target.value) }))}
            className="input-field"
          >
            {[3, 5, 8, 10].map(count => (
              <option key={count} value={count}>{count} questions</option>
            ))}
          </select>
        </div>

        {/* Output Selection */}
        <div>
          <label className="block text-lg font-bold text-gray-700 mb-4">
            🎨 What to Generate
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.outputs.lesson}
                onChange={() => updateOutputs('lesson')}
                className="w-5 h-5 text-primary-600"
              />
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📖</span>
                <span className="font-semibold">Mini Lesson</span>
              </div>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.outputs.puzzle}
                onChange={() => updateOutputs('puzzle')}
                className="w-5 h-5 text-primary-600"
              />
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🧩</span>
                <span className="font-semibold">Word Puzzle</span>
              </div>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.outputs.coloring}
                onChange={() => updateOutputs('coloring')}
                className="w-5 h-5 text-primary-600"
              />
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎨</span>
                <span className="font-semibold">Coloring Sheet</span>
              </div>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isGenerating || !Object.values(form.outputs).some(Boolean)}
          className="w-full btn-primary text-xl py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <span>Creating Magic...</span>
            </div>
          ) : (
            '✨ Generate Content'
          )}
        </button>

        {!session && (
          <p className="text-center text-gray-600 mt-4">
            <a href="/auth/signin" className="text-primary-600 font-semibold hover:underline">
              Sign in
            </a> to start generating content
          </p>
        )}
      </form>
    </div>
  )
}
