export const metadata = {
  title: "Support | MiniMinds",
  description: "Get support for MiniMinds: guides, resources, and ways to reach us.",
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-kids text-gray-800 mb-3">🛟 Support</h1>
          <p className="text-lg text-gray-600 font-comic">Find help, resources, and contact options.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/help-center" className="block p-6 rounded-2xl bg-white border hover:border-primary-200 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-bold text-gray-800 mb-1">Help Center</h3>
            <p className="text-sm text-gray-600">FAQs and troubleshooting.</p>
          </a>
          <a href="/faq" className="block p-6 rounded-2xl bg-white border hover:border-secondary-200 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-2">❓</div>
            <h3 className="font-bold text-gray-800 mb-1">FAQ</h3>
            <p className="text-sm text-gray-600">Common questions answered.</p>
          </a>
          <a href="/contact" className="block p-6 rounded-2xl bg-white border hover:border-accent-200 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-2">📬</div>
            <h3 className="font-bold text-gray-800 mb-1">Contact Us</h3>
            <p className="text-sm text-gray-600">Email our support team.</p>
          </a>
        </div>
      </section>
    </main>
  )
}
