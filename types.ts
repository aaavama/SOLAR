export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  unit: string;
  description: string;
  specs: string[];
  imageUrl: string;
  inStock: boolean;
}

export enum ProductCategory {
  Cables = 'Cables & Connectors',
  Protection = 'Circuit Protection',
  Mounting = 'Mounting & Racking',
  Combiners = 'Combiner Boxes',
  Monitoring = 'Monitoring & Control'
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
