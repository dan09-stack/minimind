export const metadata = {
  title: "Contact Us | MiniMinds",
  description: "Reach the MiniMinds support team.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-kids text-gray-800 mb-3">📬 Contact Us</h1>
          <p className="text-lg text-gray-600 font-comic">We usually reply within 1 business day.</p>
        </div>

        <div className="bg-white rounded-2xl border p-6 space-y-4">
          <p className="text-gray-700 font-comic">Email: <a className="text-primary-600 underline" href="mailto:support@miniminds.app">support@miniminds.app</a></p>
          <p className="text-gray-700 font-comic">For billing questions, include your order email and timestamp.</p>
          <p className="text-gray-700 font-comic">For technical issues, attach screenshots and steps to reproduce.</p>
        </div>
      </section>
    </main>
  )
}
