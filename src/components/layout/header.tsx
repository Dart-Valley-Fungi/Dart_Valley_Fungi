"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold text-gray-900">
              Dart Valley Fungi
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
              About
            </Link>
            <a href="mailto:hello@dartvalleyfungi.co.uk" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-gray-900" />
            ) : (
              <Menu className="h-5 w-5 text-gray-900" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/shop"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <a
                href="mailto:hello@dartvalleyfungi.co.uk"
                className="text-sm text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
