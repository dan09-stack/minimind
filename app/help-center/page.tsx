export const metadata = {
  title: "Help Center | MiniMinds",
  description: "Get help with MiniMinds: FAQs, troubleshooting, and contact support.",
}

export default function HelpCenterPage() {
  const faqs = [
    {
      q: "Why can't I generate content?",
      a: "Make sure you are signed in and have available generations. If you reached your free limit, upgrade on the pricing page.",
    },
    {
      q: "My OpenAI request failed.",
      a: "Check that your OpenAI API key is set in environment variables and that your account has credits.",
    },
    {
      q: "Payments are not going through.",
      a: "Use Stripe test cards in test mode (e.g., 4242 4242 4242 4242). For live mode, ensure your card details are correct.",
    },
    {
      q: "I can't sign in.",
      a: "Try resetting your password. If the issue persists, contact support with your email and any error message.",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-kids text-gray-800 mb-4">🛟 Help Center</h1>
          <p className="text-lg text-gray-600 font-comic">
            Find quick answers, fix common issues, or get in touch with us.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href="#faqs" className="block p-6 rounded-2xl bg-white border hover:border-primary-200 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-2">❓</div>
            <h3 className="font-bold text-gray-800 mb-1">FAQs</h3>
            <p className="text-sm text-gray-600">Most common questions answered.</p>
          </a>
      
          <a href="#contact" className="block p-6 rounded-2xl bg-white border hover:border-accent-200 shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-2">📬</div>
            <h3 className="font-bold text-gray-800 mb-1">Contact Support</h3>
            <p className="text-sm text-gray-600">We usually reply within 1 business day.</p>
          </a>
        </div>

        {/* FAQs */}
        <div id="faqs" className="mb-16">
          <h2 className="text-3xl font-kids text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-xl border p-4">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-semibold text-gray-800">{f.q}</span>
                  <span className="ml-3 text-xl group-open:rotate-45 transition">➕</span>
                </summary>
                <p className="mt-3 text-gray-600 font-comic">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

       

        {/* Contact */}
        <div id="contact" className="mb-16">
          <h2 className="text-3xl font-kids text-gray-800 mb-6">Contact Support</h2>
          <div className="bg-white rounded-xl border p-6">
            <p className="text-gray-700 font-comic mb-4">Email us and include screenshots/logs for faster help.</p>
            <ul className="text-gray-700 font-comic space-y-2">
              <li>📧 Email: <a className="text-primary-600 underline" href="mailto:support@miniminds.app">support@miniminds.app</a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
