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
    id: "sage-baller-hoodie",
    name: "Sage Baller Hoodie",
    price: 35000,
    category: "HOODIES",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Sage Baller signature hoodie — Built Different. Play Fearless. Trust the Process.",
    image: "/Hoodie.jpg.jpeg",
    featured: true,
  },
  {
    id: "sage-baller-tee-black",
    name: "Sage Baller Tee — Black",
    price: 25000,
    category: "T-SHIRTS",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Black Sage Baller graphic tee. Every Game. Every Shot.",
    image: "/sage merch.png",
    featured: true,
  },
  {
    id: "sage-baller-tee-trio",
    name: "Sage Baller Tee — Trio",
    price: 25000,
    category: "T-SHIRTS",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "Sage Baller graphic tee available in black, white, and navy. Built Different.",
    image: "/Sage Merch 2.png",
    featured: true,
  },
];
