'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [name, setName] = useState('')

  useEffect(() => {
    if (status === 'loading') return
    if (!session) router.push('/auth/signin')
    setName(session?.user?.name || '')
  }, [session, status, router])

  const onSave = async () => {
    // TODO: Implement PATCH /api/user when backend route is ready
    alert('Profile saved (demo)')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-kids text-gray-800 mb-6">👤 Profile</h1>
        <div className="bg-white rounded-2xl border p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              value={session?.user?.email || ''}
              disabled
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-600"
            />
          </div>
          <div className="flex justify-end">
            <button onClick={onSave} className="btn-primary">Save Changes</button>
          </div>
        </div>
      </section>
    </main>
  )
}
