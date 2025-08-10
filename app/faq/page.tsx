export const metadata = {
  title: "FAQ | MiniMinds",
  description: "Frequently asked questions about MiniMinds.",
}

export default function FAQPage() {
  const faqs = [
    { q: "What is included in the free trial?", a: "You get 5 generations to try all features." },
    { q: "Can I cancel anytime?", a: "Yes, manage your subscription from your dashboard." },
    { q: "Do you store my payment details?", a: "No. Stripe handles payment details; we don't store card numbers." },
    { q: "Which ages do you support?", a: "The content is tuned for ages 4–12." },
  ]
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-kids text-gray-800 mb-3">❓ FAQ</h1>
          <p className="text-lg text-gray-600 font-comic">Answers to common questions.</p>
        </div>
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
      </section>
    </main>
  )
}
