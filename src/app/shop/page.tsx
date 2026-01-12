import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductCard } from "@/components/shop/product-card";
import { getAllProducts } from "@/lib/shopify";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description: "Buy fresh gourmet mushrooms, grow kits, and mushroom products from Dart Valley Fungi.",
};

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-white">
                Shop Mushrooms
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Fresh gourmet mushrooms and grow kits, delivered from our Devon farm to your door.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products available yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
