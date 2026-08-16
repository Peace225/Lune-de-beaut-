export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "01",
    name: "Soin Éclat Visage",
    description:
      "Un soin doux conçu pour révéler naturellement l'éclat de votre peau.",
    price: 15000,
    category: "Visage",
    image: "/images/product-1.jpg",
  },
  {
    id: "02",
    name: "Lait Corps Éclat",
    description:
      "Une formule hydratante pour une peau douce, lumineuse et parfaitement nourrie.",
    price: 12000,
    category: "Corps",
    image: "/images/product-2.jpg",
  },
  {
    id: "03",
    name: "Huile Précieuse",
    description:
      "Une huile sensorielle pour nourrir la peau et sublimer son éclat naturel.",
    price: 10000,
    category: "Corps",
    image: "/images/product-3.jpg",
  },
  {
    id: "04",
    name: "Gommage Douceur",
    description:
      "Un gommage délicat pour éliminer les impuretés et retrouver une peau douce.",
    price: 13000,
    category: "Visage",
    image: "/images/product-4.jpg",
  },
];