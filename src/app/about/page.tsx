import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";
import { Leaf, Recycle, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Dart Valley Fungi, our story, and our commitment to sustainable mushroom farming in Devon.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
                Our Story
              </h1>
              <p className="text-lg lg:text-xl text-primary-foreground/80">
                Growing gourmet mushrooms with purpose, passion, and a commitment to sustainability.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <Image
                  src="/images/founders.jpg"
                  alt="Dart Valley Fungi Founders"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">From Devon with Love</h2>
                <p className="text-muted-foreground mb-4">
                  Just over the hill from our farm in Devon, Mic Eaton and Luke Watson grow an incredible 
                  variety of gourmet mushrooms. What started as a passion project has grown into something 
                  much bigger - a sustainable business that's changing how people think about food.
                </p>
                <p className="text-muted-foreground mb-4">
                  Their barn has been specially adapted to create the ideal environment for all sorts of 
                  unusual fungi varieties. Temperature, humidity, and airflow are carefully controlled 
                  to ensure every mushroom reaches its full potential.
                </p>
                <p className="text-muted-foreground">
                  But it's not just about the mushrooms - it's about the community and the planet we share.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every decision we make is guided by our commitment to sustainability and quality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Recycle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Zero Waste</h3>
                <p className="text-sm text-muted-foreground">
                  We transform agricultural waste into gourmet food, keeping materials out of landfills.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Local First</h3>
                <p className="text-sm text-muted-foreground">
                  We partner with local producers to create a truly circular local food system.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-sm text-muted-foreground">
                  We never compromise on quality. Every mushroom is hand-selected at peak freshness.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">Education</h3>
                <p className="text-sm text-muted-foreground">
                  We love sharing knowledge about mushrooms and sustainable farming practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold mb-8 text-center">Our Local Partners</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">Barnaby's Brewhouse</h3>
                  <p className="text-muted-foreground mb-4">
                    Local craft brewery whose spent grain would otherwise go to waste. We use this nutrient-rich 
                    by-product as a growing substrate for our oyster mushrooms.
                  </p>
                </div>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">Riverford Dairy</h3>
                  <p className="text-muted-foreground">
                    Organic dairy producer whose whey is a perfect supplement for our mushroom substrate. 
                    This partnership keeps quality local resources in the local economy.
                  </p>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-8">
                We believe in the power of local partnerships to create sustainable, resilient food systems.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Have questions about our mushrooms, growing methods, or want to partner with us? 
              We'd love to hear from you.
            </p>
            <a 
              href="mailto:hello@dartvalleyfungi.co.uk" 
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-md font-medium hover:bg-accent/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
