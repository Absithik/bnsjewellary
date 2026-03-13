export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Gold' | 'Silver';
  type: string;
  image: string;
  rating: number;
  description: string;
  collection: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Aurelia Signature Band',
    price: 1850,
    category: 'Gold',
    type: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=90&w=1200',
    rating: 4.9,
    description: 'A masterpiece of minimalist design, crafted in 18k solid gold with a satin finish.',
    collection: 'Modern Minimal',
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Celestial Emerald Drop',
    price: 5200,
    category: 'Gold',
    type: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=90&w=1200',
    rating: 5.0,
    description: 'A rare Zambian emerald suspended from a delicate gold chain, radiating timeless grace.',
    collection: 'Wedding Collection',
    isNew: true
  },
  {
    id: '3',
    name: 'Lunar Silver Hoops',
    price: 480,
    category: 'Silver',
    type: 'Earrings',
    image: 'https://images.unsplash.com/photo-1635767790414-0399333f240b?auto=format&fit=crop&q=90&w=1200',
    rating: 4.7,
    description: 'Hand-polished sterling silver hoops that catch the light like the evening moon.',
    collection: 'Daily Wear',
    isBestSeller: true
  },
  {
    id: '4',
    name: 'Heritage Gold Bangle',
    price: 3400,
    category: 'Gold',
    type: 'Bangles',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=90&w=1200',
    rating: 4.8,
    description: 'Intricate filigree work meets solid 22k gold in this heritage-inspired statement piece.',
    collection: 'Traditional Collection'
  },
  {
    id: '5',
    name: 'Starlight Silver Cuff',
    price: 650,
    category: 'Silver',
    type: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1535633302703-b0703af78518?auto=format&fit=crop&q=90&w=1200',
    rating: 4.6,
    description: 'A bold yet elegant silver cuff, etched with patterns reminiscent of a starry night.',
    collection: 'Modern Minimal',
    isNew: true
  },
  {
    id: '6',
    name: 'Imperial Diamond Ring',
    price: 12500,
    category: 'Gold',
    type: 'Rings',
    image: 'https://images.unsplash.com/photo-1586822330090-c3828d4489e3?auto=format&fit=crop&q=90&w=1200',
    rating: 5.0,
    description: 'A flawless 2-carat diamond set in a bespoke platinum and gold mount.',
    collection: 'Wedding Collection',
    isBestSeller: true
  }
];

export const categories = [
  { name: 'Gold Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=90&w=800', count: 24 },
  { name: 'Gold Necklaces', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=90&w=800', count: 18 },
  { name: 'Gold Bangles', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=90&w=800', count: 12 },
  { name: 'Silver Rings', image: 'https://images.unsplash.com/photo-1603561591411-071c4f723918?auto=format&fit=crop&q=90&w=800', count: 32 },
  { name: 'Silver Chains', image: 'https://images.unsplash.com/photo-1611085583191-a3b13b24424a?auto=format&fit=crop&q=90&w=800', count: 15 },
  { name: 'Silver Bracelets', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=90&w=800', count: 21 },
];
