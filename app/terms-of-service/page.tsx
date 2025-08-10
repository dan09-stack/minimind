export const metadata = {
  title: "Terms of Service | MiniMinds",
  description: "Terms for using the MiniMinds service.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().getFullYear()}</p>
        <h2>Acceptance of Terms</h2>
        <p>By using MiniMinds, you agree to these terms and our Privacy Policy.</p>
        <h2>Use of Service</h2>
        <ul>
          <li>Provide accurate account information</li>
          <li>Do not misuse the service or attempt to disrupt it</li>
          <li>Respect intellectual property rights</li>
        </ul>
        <h2>Subscriptions</h2>
        <p>Paid plans auto-renew until canceled. Managed by Stripe.</p>
        <h2>Disclaimer</h2>
        <p>Service is provided “as is” without warranties. We are not liable for indirect damages.</p>
        <h2>Contact</h2>
        <p>Questions? <a href="mailto:support@miniminds.app">support@miniminds.app</a></p>
      </section>
    </main>
  )
}
