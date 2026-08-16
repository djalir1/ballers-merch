export type Category =
  | "T-SHIRTS"
  | "JERSEYS"
  | "HOODIES"
  | "CAPS"
  | "ACCESSORIES";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: Category;
  sizes: string[];
  description: string;
  image: string;
  featured?: boolean;
};

export const categories = [
  "ALL",
  "T-SHIRTS",
  "JERSEYS",
  "HOODIES",
  "CAPS",
  "ACCESSORIES",
] as const;

/** Edit / add / remove products here — the whole site reads from this list. */
export const products: Product[] = [
  {
    id: "sage-baller-tshirt-black",
    name: "Sage Baller T-Shirt — Black",
    price: 25000,
    category: "T-SHIRTS",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Black Sage Baller graphic T-Shirt. Every Game. Every Shot.",
    image: "/sage merch.png",
    featured: true,
  },
  {
    id: "sage-baller-tshirt-white",
    name: "Sage Baller T-Shirt — White",
    price: 25000,
    category: "T-SHIRTS",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "White Sage Baller graphic T-Shirt. Built Different. Play Fearless.",
    image: "/white t shirt.jpg.jpeg",
    featured: true,
  },
  {
    id: "sage-baller-tshirt-each",
    name: "Sage Baller T-Shirt — Each",
    price: 20000,
    category: "T-SHIRTS",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Sage Baller graphic T-Shirt available in black, white, and navy. Priced each. Built Different.",
    image: "/Sage Merch 2.png",
    featured: true,
  },
  {
    id: "sage-baller-hoodie",
    name: "Sage Baller Hoodie",
    price: 37000,
    category: "HOODIES",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Sage Baller signature hoodie — Built Different. Play Fearless. Trust the Process.",
    image: "/Hoodie.jpg.jpeg",
    featured: true,
  },
];
