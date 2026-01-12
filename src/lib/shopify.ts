import type { Product } from "@/types";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "prod_1",
    handle: "lions-mane-fresh",
    title: "Organic Lion's Mane Mushroom",
    description: "These shaggy-looking mushrooms are hailed for their firm, dense texture, reminiscent of lobster or slow-cooked meat. They're also prized in traditional Chinese medicine, where lion's mane powders and tinctures are believed to boost brain health.",
    price: 7.50,
    currency: "GBP",
    images: ["/images/lions-mane.jpg"],
    availableForSale: true,
    productType: "Fresh Mushrooms",
    weight: "200g",
  },
  {
    id: "prod_2",
    handle: "king-oyster",
    title: "Organic King Oyster Mushroom",
    description: "These special King Oyster mushrooms are hailed for their dense, meaty texture and depth of savoury flavour. They've become the darlings of vegan cookery in the last few years, often billed on restaurant menus as 'mushroom steaks' or 'vegan scallops'.",
    price: 6.95,
    currency: "GBP",
    images: ["/images/king-oyster.jpg"],
    availableForSale: true,
    productType: "Fresh Mushrooms",
    weight: "200g",
  },
  {
    id: "prod_3",
    handle: "hen-of-woods",
    title: "Organic Hen of the Woods",
    description: "These earthy, sweet mushrooms (known and loved in Japan as 'Maitake') have a flavour reminiscent of truffles. Earthy, sweet, and distinctly truffle-like... In the words of our farm chef, 'they're bloody good.'",
    price: 7.45,
    currency: "GBP",
    images: ["/images/hen-of-woods.jpg"],
    availableForSale: true,
    productType: "Fresh Mushrooms",
    weight: "150g",
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

export function formatPriceWithWeight(price: number, currency: string = "GBP", weight?: string): string {
  const formatted = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
  }).format(price);
  return weight ? `${formatted} / ${weight}` : formatted;
}
