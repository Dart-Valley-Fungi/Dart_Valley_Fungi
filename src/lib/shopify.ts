import type { Product } from "@/types";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_1",
    handle: "lions-mane-substrate",
    title: "Lion's Mane Substrate Block",
    description: "Premium ready-to-fruit substrate block for Lion's Mane mushrooms. Grown on organic peat-free substrate using sustainable by-products from local farms.",
    price: 8.50,
    currency: "GBP",
    images: ["/images/lions-mane.jpg"],
    availableForSale: true,
    productType: "Substrate Block",
    blockWeight: "~2.5kg",
    fruitingTemp: "15-20°C",
    incubationTime: "14-21 days",
    expectedYield: "500-800g",
    storageInstructions: "Store at 2-4°C. Use within 2 weeks of delivery for best results.",
  },
  {
    id: "prod_2",
    handle: "king-oyster-substrate",
    title: "King Oyster Substrate Block",
    description: "High-yield substrate block for King Oyster mushrooms. Produces large, meaty mushrooms with excellent texture and flavour.",
    price: 7.95,
    currency: "GBP",
    images: ["/images/king-oyster.jpg"],
    availableForSale: true,
    productType: "Substrate Block",
    blockWeight: "~2.5kg",
    fruitingTemp: "15-18°C",
    incubationTime: "14-21 days",
    expectedYield: "600-900g",
    storageInstructions: "Store at 2-4°C. Use within 2 weeks of delivery for best results.",
  },
  {
    id: "prod_3",
    handle: "hen-of-woods-substrate",
    title: "Hen of Woods Substrate Block",
    description: "Premium substrate for Hen of Woods (Maitake). Produces clusters with exceptional truffle-like flavour.",
    price: 8.45,
    currency: "GBP",
    images: ["/images/hen-of-woods.jpg"],
    availableForSale: true,
    productType: "Substrate Block",
    blockWeight: "~2.5kg",
    fruitingTemp: "12-16°C",
    incubationTime: "21-28 days",
    expectedYield: "400-700g",
    storageInstructions: "Store at 2-4°C. Use within 2 weeks of delivery for best results.",
  },
  {
    id: "prod_4",
    handle: "mixed-substrate-pack",
    title: "Mixed Substrate Pack (3 Blocks)",
    description: "Assorted pack containing one block each of Lion's Mane, King Oyster, and Hen of Woods. Perfect for trying different varieties.",
    price: 22.00,
    currency: "GBP",
    images: ["/images/lions-mane.jpg", "/images/king-oyster.jpg", "/images/hen-of-woods.jpg"],
    availableForSale: true,
    productType: "Substrate Pack",
    blockWeight: "~7.5kg total",
    fruitingTemp: "Varies by variety",
    incubationTime: "14-28 days",
    expectedYield: "1.5-2.5kg total",
    storageInstructions: "Store at 2-4°C. Use within 2 weeks of delivery for best results.",
  },
];

export async function getAllProducts(): Promise<Product[]> {
  return MOCK_PRODUCTS;
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const product = MOCK_PRODUCTS.find((p) => p.handle === handle);
  return product || null;
}

export async function getProductsByType(productType: string): Promise<Product[]> {
  return MOCK_PRODUCTS.filter((p) => p.productType === productType);
}

export function formatPrice(price: number, currency: string = "GBP"): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
  }).format(price);
}
