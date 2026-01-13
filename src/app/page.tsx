import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/shop/product-card";
import { getAllProducts } from "@/lib/shopify";
import { ArrowRight } from "lucide-react";

export default async function HomePage() {
  const products = await getAllProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-semibold mb-6 tracking-tight">
                Premium Mushroom Substrate Blocks
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready-to-fruit substrate blocks for professional growers and chefs.
                Grown sustainably in Devon using organic by-products.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                View Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Substrate Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                High-quality substrate blocks for cultivating gourmet mushrooms.
                Each block is carefully prepared for consistent results.
              </p>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">Products coming soon.</p>
              </div>
            )}

            {products.length > 4 && (
              <div className="text-center mt-12">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  View All Products <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src="/images/founders.jpg"
                  alt="Dart Valley Fungi Farm"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-6">Sustainable Growing</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At Dart Valley Fungi, we grow our substrate blocks using upcycled agricultural waste
                  from local Devon producers. By transforming by-products from Barnaby's Brewhouse
                  and Riverford Dairy into premium mushroom substrate, we create a truly circular
                  local food system.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our blocks are peat-free and organic, supporting biodiversity while producing
                  consistent, high-quality results for professional cultivators.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Wholesale Orders</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                For restaurants, professional growers, or high-volume orders, please email us
                to discuss pricing and delivery arrangements.
              </p>
              <a
                href="mailto:hello@dartvalleyfungi.co.uk"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
