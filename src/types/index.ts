export interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  availableForSale: boolean;
  productType: string;
  weight?: string;
  blockWeight?: string;
  fruitingTemp?: string;
  incubationTime?: string;
  expectedYield?: string;
  storageInstructions?: string;
}
