import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative w-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Us Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-gray-900 dark:hover:text-white">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:text-gray-900 dark:hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm hover:text-gray-900 dark:hover:text-white">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:text-gray-900 dark:hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm hover:text-gray-900 dark:hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm hover:text-gray-900 dark:hover:text-white">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/new-arrivals" className="text-sm hover:text-gray-900 dark:hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/sale" className="text-sm hover:text-gray-900 dark:hover:text-white">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-sm hover:text-gray-900 dark:hover:text-white">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                <Facebook className="h-5 w-5 text-gray-800 dark:text-white" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                <Instagram className="h-5 w-5 text-gray-800 dark:text-white" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                <Twitter className="h-5 w-5 text-gray-800 dark:text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">StyleHub</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
