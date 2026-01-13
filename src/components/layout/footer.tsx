import Link from "next/link";
import { Leaf, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-gray-900">
                Dart Valley Fungi
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Premium mushroom substrate blocks grown sustainably in Devon.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Contact</p>
            <a
              href="mailto:hello@dartvalleyfungi.co.uk"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@dartvalleyfungi.co.uk
            </a>
          </div>

          <div className="space-y-3">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Quick Links</p>
            <nav className="flex flex-wrap gap-4 text-sm">
              <Link href="/shop" className="text-gray-600 hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                About
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Dart Valley Fungi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
