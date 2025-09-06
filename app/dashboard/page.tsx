'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface User {
  id: string
  name: string
  email: string
  generationsUsed: number
  generationsLimit: number
  subscription: {
    plan: string
    status: string
  }
}

interface Generation {
  id: string
  type: string
  subject: string
  topic: string
  age: number
  createdAt: string
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [generations, setGenerations] = useState<Generation[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'loading') return // Still loading session

    if (!session) {
      router.push('/auth/signin')
      return
    }

    const fetchDashboardData = async () => {
      try {
        const [userResponse, generationsResponse] = await Promise.all([
          fetch('/api/user'),
          fetch('/api/generations')
        ])

        if (userResponse.ok && generationsResponse.ok) {
          const userData = await userResponse.json()
          const generationsData = await generationsResponse.json()
          setUser(userData)
          setGenerations(generationsData)
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDashboardData()
  }, [session, status, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">📚</div>
          <p className="text-xl font-comic text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  const isUnlimited = user?.subscription?.plan === 'monthly' || user?.subscription?.plan === 'yearly'

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-kids text-gray-800 mb-2">
            🌟 Welcome back, {user?.name}!
          </h1>
          <p className="text-xl text-gray-600 font-comic">
            Ready to create more amazing learning content?
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Usage Stats */}
        <div className="card">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">📊</span>
            <h2 className="text-xl font-bold text-gray-800">Usage Stats</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Generations Used</p>
              <p className="text-2xl font-bold text-primary-600">
                {user?.generationsUsed || 0}
                {!isUnlimited && ` / ${user?.generationsLimit || 5}`}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Current Plan</p>
              <p className="text-lg font-semibold capitalize text-secondary-600">
                {user?.subscription?.plan || 'Free'}
              </p>
            </div>
            {!isUnlimited && (
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl">
                <p className="text-sm font-comic text-gray-700">
                  {user?.generationsLimit && user.generationsUsed >= user.generationsLimit ? (
                    <>🚨 Limit reached! <Link href="/pricing" className="text-primary-600 font-bold underline">Upgrade now</Link></>
                  ) : (
                    <>🎁 {(user?.generationsLimit || 5) - (user?.generationsUsed || 0)} generations left</>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">⚡</span>
            <h2 className="text-xl font-bold text-gray-800">Quick Actions</h2>
          </div>
          <div className="space-y-3">
            <Link href="/generator" className="block w-full btn-primary py-3 text-center">
              🎨 Create Content
            </Link>
            <Link href="/pricing" className="block w-full btn-secondary py-3 text-center">
              💎 Upgrade Plan
            </Link>
            <Link href="/profile" className="block w-full btn-accent py-3 text-center">
              ⚙️ Settings
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🕐</span>
            <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
          </div>
          <div className="space-y-3">
            {generations.slice(0, 3).map((gen) => (
              <div key={gen.id} className="bg-gray-50 p-3 rounded-xl">
                <p className="font-semibold text-gray-800">{gen.topic}</p>
                <p className="text-sm text-gray-600">
                  {gen.subject} • Age {gen.age}
                </p>
                <p className="text-xs text-gray-500">
                  {new Date(gen.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
            {generations.length === 0 && (
              <p className="text-gray-500 font-comic text-center py-4">
                No content created yet. <Link href="/generator" className="text-primary-600 underline">Start creating!</Link>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Recent Generations */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <span className="text-3xl mr-3">📚</span>
            <h2 className="text-2xl font-bold text-gray-800">Your Content Library</h2>
          </div>
          <Link href="/generator" className="btn-primary">
            🎨 Create New
          </Link>
        </div>

        {generations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generations.map((generation) => (
              <div key={generation.id} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-200 transition-all hover:transform hover:scale-105">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{generation.topic}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>📖 {generation.subject}</span>
                    <span>👶 Age {generation.age}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Content Types:</p>
                  <div className="flex space-x-2 mt-1">
                    {generation.type.split(',').map((type) => (
                      <span key={type} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {type === 'lesson' && '📖'}
                        {type === 'puzzle' && '🧩'}
                        {type === 'coloring' && '🎨'}
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    {new Date(generation.createdAt).toLocaleDateString()}
                  </span>
                  <Link 
                    href={`/results/${generation.id}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                  >
                    View & Download →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No content yet!</h3>
            <p className="text-gray-600 font-comic mb-6">
              Start creating amazing learning content for kids
            </p>
            <Link href="/generator" className="btn-primary text-lg px-8 py-3">
              🚀 Create Your First Content
            </Link>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}
