import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-secondary-200 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-2">🧠</div>
              <span className="font-kids text-2xl text-white">MiniMinds</span>
            </div>
            <p className="text-gray-100 font-comic mb-4">
              Making learning fun and accessible for every child. Generate instant, 
              age-appropriate educational content that kids love!
            </p>
            <div className="flex space-x-4">
              <span className="text-2xl">📧</span>
              <span className="text-2xl">📱</span>
              <span className="text-2xl">🐦</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/generate" className="text-gray-100 hover:text-white transition-colors">
                  Content Generator
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-100 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-100 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-100 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-100 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-100 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-100 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/40 mt-8 pt-8 text-center">
          <p className="text-gray-100 font-comic">
            © 2025 MiniMinds. Made with 💖 for amazing kids and parents.
          </p>
        </div>
      </div>
    </footer>
  )
}
