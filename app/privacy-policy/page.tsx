export const metadata = {
  title: "Privacy Policy | MiniMinds",
  description: "How MiniMinds collects and uses your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().getFullYear()}</p>
        <h2>Overview</h2>
        <p>We collect account data to provide our service (authentication, subscription, content generation). We do not sell your data.</p>
        <h2>Data We Collect</h2>
        <ul>
          <li>Account info (name, email)</li>
          <li>Usage data (generations count, timestamps)</li>
          <li>Payment data via Stripe (we do not store card details)</li>
        </ul>
        <h2>How We Use Data</h2>
        <ul>
          <li>Authenticate users and provide features</li>
          <li>Process payments and manage subscriptions</li>
          <li>Improve performance and reliability</li>
        </ul>
        <h2>Third Parties</h2>
        <ul>
          <li>Stripe for payments</li>
          <li>OpenAI for content generation</li>
          <li>Hosting (Netlify) and database (e.g., Neon)</li>
        </ul>
        <h2>Your Rights</h2>
        <p>Contact us to access or delete your data: <a href="mailto:support@miniminds.app">support@miniminds.app</a>.</p>
      </section>
    </main>
  )
}
