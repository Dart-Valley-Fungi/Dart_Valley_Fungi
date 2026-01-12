import Link from "next/link";
import { Leaf, Mail, MapPin } from "lucide-react";
import { Header } from "./header";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-accent" />
              <span className="font-serif text-lg font-bold text-white">
                Dart Valley Fungi
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Gourmet mushrooms grown sustainably in Devon using upcycled agricultural waste.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/fungi" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Our Fungi
              </Link>
              <Link href="/shop" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Shop Mushrooms
              </Link>
              <Link href="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-white">Contact</h3>
            <div className="flex flex-col space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Devon, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:hello@dartvalleyfungi.co.uk" className="hover:text-accent transition-colors">
                  hello@dartvalleyfungi.co.uk
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-white">Sustainability</h3>
            <p className="text-sm text-primary-foreground/80">
              We grow our mushrooms using upcycled agricultural waste and by-products from local organic producers.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Dart Valley Fungi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
