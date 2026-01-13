import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/shopify";
import type { Product } from "@/types";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/${product.handle}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full cursor-pointer border border-gray-100">
        <div className="aspect-square bg-muted relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <CardContent className="pt-6">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
            {product.productType}
          </p>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-primary">
              {formatPrice(product.price)}
            </span>
            <span className="flex items-center gap-1 text-sm text-primary font-medium">
              Details <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
