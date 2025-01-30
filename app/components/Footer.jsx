import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            CU PlayNation
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/about" className="hover:text-gray-600 transition-colors">
              About Us
            </Link>
            <Link href="/workshops" className="hover:text-gray-600 transition-colors">
              Workshops
            </Link>
            <Link href="/tournaments" className="hover:text-gray-600 transition-colors">
              eSports Tournaments
            </Link>
            <Link href="/community" className="hover:text-gray-600 transition-colors">
              Community Highlights
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link href="https://facebook.com" className="hover:text-gray-600 transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com" className="hover:text-gray-600 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://twitter.com" className="hover:text-gray-600 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="https://youtube.com" className="hover:text-gray-600 transition-colors">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 CU PlayNation Gaming Club. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-gray-600 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-gray-600 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

