import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/shop/product-card";
import { getAllProducts } from "@/lib/shopify";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Premium mushroom substrate blocks for professional growers and chefs.",
};

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-semibold mb-4">Our Products</h1>
              <p className="text-gray-600">
                Premium ready-to-fruit substrate blocks for mushroom cultivation.
                Grown sustainably in Devon using organic by-products.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No products available yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
