import fashion1 from "@/assets/fashion-1.jpg";
import fashion2 from "@/assets/fashion-2.jpg";
import fashion3 from "@/assets/fashion-3.jpg";
import electronics1 from "@/assets/electronics-1.jpg";
import electronics2 from "@/assets/electronics-2.jpg";
import electronics3 from "@/assets/electronics-3.jpg";
import mobiles1 from "@/assets/mobiles-1.jpg";
import mobiles2 from "@/assets/mobiles-2.jpg";
import mobiles3 from "@/assets/mobiles-3.jpg";
import beauty1 from "@/assets/beauty-1.jpg";
import beauty2 from "@/assets/beauty-2.jpg";
import beauty3 from "@/assets/beauty-3.jpg";
import home1 from "@/assets/home-1.jpg";
import home2 from "@/assets/home-2.jpg";
import home3 from "@/assets/home-3.jpg";
import grocery1 from "@/assets/grocery-1.jpg";
import grocery2 from "@/assets/grocery-2.jpg";
import grocery3 from "@/assets/grocery-3.jpg";
import sports1 from "@/assets/sports-1.jpg";
import sports2 from "@/assets/sports-2.jpg";
import sports3 from "@/assets/sports-3.jpg";
import accessories1 from "@/assets/accessories-1.jpg";
import accessories2 from "@/assets/accessories-2.jpg";
import accessories3 from "@/assets/accessories-3.jpg";

export type ColorOption = { name: string; hex: string };

export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  categorySlug: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  images: string[];
  colors: ColorOption[];
  sizes: string[];
  stock: number;
  specifications: Record<string, string>;
  bestSeller?: boolean;
  popular?: boolean;
  deal?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  image: string;
  blurb: string;
};

export const categories: Category[] = [
  { slug: "fashion", name: "Fashion", image: fashion1, blurb: "Linen, knits & everyday layers" },
  { slug: "electronics", name: "Electronics", image: electronics1, blurb: "Sound, light & smart living" },
  { slug: "mobiles", name: "Mobiles", image: mobiles1, blurb: "Phones built to last" },
  { slug: "beauty", name: "Beauty", image: beauty1, blurb: "Skin, scent & rituals" },
  { slug: "home-kitchen", name: "Home & Kitchen", image: home1, blurb: "Stoneware, copper & comfort" },
  { slug: "grocery", name: "Grocery", image: grocery1, blurb: "Pantry staples, well sourced" },
  { slug: "sports", name: "Sports", image: sports1, blurb: "Move, train & recover" },
  { slug: "accessories", name: "Accessories", image: accessories1, blurb: "Leather, lenses & time" },
];

const CLAY: ColorOption = { name: "Clay", hex: "#b4491f" };
const SAND: ColorOption = { name: "Sand", hex: "#e3cba4" };
const CREAM: ColorOption = { name: "Cream", hex: "#f3ece0" };
const OLIVE: ColorOption = { name: "Olive", hex: "#7b7c4e" };
const ESPRESSO: ColorOption = { name: "Espresso", hex: "#4a3628" };
const AMBER: ColorOption = { name: "Amber", hex: "#d98a3d" };

const APPAREL_SIZES = ["XS", "S", "M", "L", "XL"];
const SHOE_SIZES = ["7", "8", "9", "10", "11"];

type Seed = Omit<Product, "discount" | "categorySlug" | "category"> & {
  categorySlug: string;
  category: string;
};

const raw: Seed[] = [
  // Fashion
  {
    id: "terracotta-linen-shirt",
    name: "Terracotta Linen Shirt",
    description: "Airy washed linen with a relaxed collar and mother-of-pearl buttons.",
    category: "Fashion",
    categorySlug: "fashion",
    brand: "Ashvale Studio",
    price: 42,
    originalPrice: 56,
    rating: 4.5,
    reviewCount: 212,
    images: [fashion1, fashion2, fashion3],
    colors: [CLAY, SAND, CREAM],
    sizes: APPAREL_SIZES,
    stock: 24,
    specifications: { Material: "100% European linen", Fit: "Relaxed", Care: "Machine wash cold", Origin: "Portugal" },
    popular: true,
    bestSeller: true,
    deal: true,
  },
  {
    id: "waffle-knit-sweater",
    name: "Waffle Knit Sweater",
    description: "Chunky waffle knit in undyed cotton for cool evenings.",
    category: "Fashion",
    categorySlug: "fashion",
    brand: "Ashvale Studio",
    price: 68,
    originalPrice: 89,
    rating: 4.6,
    reviewCount: 168,
    images: [fashion2, fashion1, fashion3],
    colors: [CREAM, CLAY, ESPRESSO],
    sizes: APPAREL_SIZES,
    stock: 12,
    specifications: { Material: "Organic cotton", Fit: "Oversized", Care: "Hand wash", Origin: "Portugal" },
    bestSeller: true,
  },
  {
    id: "cotton-midi-dress",
    name: "Cotton Midi Dress",
    description: "A softly gathered midi with adjustable straps and deep pockets.",
    category: "Fashion",
    categorySlug: "fashion",
    brand: "Solene",
    price: 74,
    originalPrice: 98,
    rating: 4.4,
    reviewCount: 143,
    images: [fashion3, fashion1, fashion2],
    colors: [CREAM, SAND],
    sizes: APPAREL_SIZES,
    stock: 8,
    specifications: { Material: "Cotton poplin", Length: "Midi", Care: "Machine wash cold", Origin: "India" },
    popular: true,
    deal: true,
  },
  {
    id: "washed-canvas-jacket",
    name: "Washed Canvas Jacket",
    description: "A sturdy chore jacket that softens with every wear.",
    category: "Fashion",
    categorySlug: "fashion",
    brand: "Northbank",
    price: 112,
    originalPrice: 145,
    rating: 4.7,
    reviewCount: 96,
    images: [fashion1, fashion3],
    colors: [ESPRESSO, OLIVE, SAND],
    sizes: APPAREL_SIZES,
    stock: 0,
    specifications: { Material: "Cotton canvas", Fit: "Regular", Pockets: "4", Origin: "Turkey" },
  },
  // Electronics
  {
    id: "amberfield-mini-speaker",
    name: "Amberfield Mini Speaker",
    description: "Pocket-sized speaker with warm mids and 16-hour battery.",
    category: "Electronics",
    categorySlug: "electronics",
    brand: "Amberfield",
    price: 89,
    originalPrice: 109,
    rating: 4.2,
    reviewCount: 89,
    images: [electronics1, electronics3, electronics2],
    colors: [CLAY, ESPRESSO],
    sizes: [],
    stock: 31,
    specifications: { Battery: "16 hours", Bluetooth: "5.3", Waterproof: "IPX5", Weight: "480 g" },
    popular: true,
  },
  {
    id: "drift-wireless-earbuds",
    name: "Drift Wireless Earbuds",
    description: "Featherlight buds with adaptive noise cancelling.",
    category: "Electronics",
    categorySlug: "electronics",
    brand: "Amberfield",
    price: 119,
    originalPrice: 159,
    rating: 4.5,
    reviewCount: 421,
    images: [electronics2, electronics1],
    colors: [CREAM, ESPRESSO],
    sizes: [],
    stock: 44,
    specifications: { Battery: "8h + 24h case", ANC: "Adaptive", Charging: "USB-C / Qi", Weight: "4.6 g each" },
    bestSeller: true,
    deal: true,
  },
  {
    id: "atelier-over-ear-headphones",
    name: "Atelier Over-Ear Headphones",
    description: "Leather-wrapped cups and a 40-hour studio-grade session.",
    category: "Electronics",
    categorySlug: "electronics",
    brand: "Atelier Audio",
    price: 229,
    originalPrice: 289,
    rating: 4.8,
    reviewCount: 302,
    images: [electronics3, electronics1],
    colors: [ESPRESSO, CREAM],
    sizes: [],
    stock: 6,
    specifications: { Drivers: "40 mm", Battery: "40 hours", Codec: "LDAC", Weight: "265 g" },
    popular: true,
    bestSeller: true,
  },
  {
    id: "desk-charging-pad",
    name: "Desk Charging Pad",
    description: "A three-device charging mat wrapped in vegan leather.",
    category: "Electronics",
    categorySlug: "electronics",
    brand: "Northbank",
    price: 59,
    originalPrice: 79,
    rating: 4.1,
    reviewCount: 74,
    images: [electronics2, electronics3],
    colors: [SAND, ESPRESSO],
    sizes: [],
    stock: 18,
    specifications: { Output: "15W x3", Cable: "USB-C 1.5m", Material: "Vegan leather" },
  },
  // Mobiles
  {
    id: "lumen-x1-phone",
    name: "Lumen X1",
    description: "A bright 6.4-inch display and two-day battery in a slim shell.",
    category: "Mobiles",
    categorySlug: "mobiles",
    brand: "Lumen",
    price: 649,
    originalPrice: 749,
    rating: 4.4,
    reviewCount: 512,
    images: [mobiles1, mobiles3, mobiles2],
    colors: [CLAY, ESPRESSO, SAND],
    sizes: ["128GB", "256GB", "512GB"],
    stock: 15,
    specifications: { Display: '6.4" OLED 120Hz', Chip: "Lumen L3", Camera: "50MP + 12MP", Battery: "5000 mAh" },
    popular: true,
    bestSeller: true,
  },
  {
    id: "lumen-air",
    name: "Lumen Air",
    description: "The lightest Lumen yet, in a warm titanium finish.",
    category: "Mobiles",
    categorySlug: "mobiles",
    brand: "Lumen",
    price: 899,
    originalPrice: 999,
    rating: 4.6,
    reviewCount: 288,
    images: [mobiles2, mobiles1],
    colors: [SAND, ESPRESSO],
    sizes: ["256GB", "512GB"],
    stock: 9,
    specifications: { Display: '6.1" OLED', Chip: "Lumen L4", Weight: "162 g", Battery: "4400 mAh" },
    deal: true,
  },
  {
    id: "lumen-fold-mini",
    name: "Lumen Fold Mini",
    description: "Folds to palm size, opens to a full 7-inch canvas.",
    category: "Mobiles",
    categorySlug: "mobiles",
    brand: "Lumen",
    price: 1149,
    originalPrice: 1349,
    rating: 4.3,
    reviewCount: 121,
    images: [mobiles3, mobiles2],
    colors: [AMBER, ESPRESSO],
    sizes: ["256GB", "512GB"],
    stock: 4,
    specifications: { Display: '7.0" foldable', Hinge: "200k folds", Camera: "50MP", Battery: "4200 mAh" },
  },
  {
    id: "civic-5g-phone",
    name: "Civic 5G",
    description: "Dependable everyday 5G with a clean, ad-free interface.",
    category: "Mobiles",
    categorySlug: "mobiles",
    brand: "Civic",
    price: 329,
    originalPrice: 399,
    rating: 4.0,
    reviewCount: 634,
    images: [mobiles2, mobiles3],
    colors: [SAND, CLAY],
    sizes: ["128GB", "256GB"],
    stock: 40,
    specifications: { Display: '6.5" LCD', Chip: "Civic C7", Camera: "48MP", Battery: "5200 mAh" },
  },
  // Beauty
  {
    id: "golden-hour-serum",
    name: "Golden Hour Serum",
    description: "Vitamin-rich facial oil that leaves a soft-focus glow.",
    category: "Beauty",
    categorySlug: "beauty",
    brand: "Sola",
    price: 34,
    originalPrice: 40,
    rating: 4.6,
    reviewCount: 501,
    images: [beauty1, beauty3, beauty2],
    colors: [],
    sizes: ["30ml", "50ml"],
    stock: 60,
    specifications: { Volume: "30 ml", Skin: "All types", Key: "Rosehip + squalane", Vegan: "Yes" },
    popular: true,
    bestSeller: true,
  },
  {
    id: "everyday-balm-set",
    name: "Everyday Balm Set",
    description: "Three refillable balms for lips, cuticles and dry patches.",
    category: "Beauty",
    categorySlug: "beauty",
    brand: "Sola",
    price: 28,
    originalPrice: 38,
    rating: 4.3,
    reviewCount: 219,
    images: [beauty2, beauty1],
    colors: [],
    sizes: [],
    stock: 33,
    specifications: { Pieces: "3", Refillable: "Yes", Scent: "Unscented" },
    deal: true,
  },
  {
    id: "dusk-eau-de-parfum",
    name: "Dusk Eau de Parfum",
    description: "Amber, fig leaf and warm cedar — a scent for late light.",
    category: "Beauty",
    categorySlug: "beauty",
    brand: "Maison Dusk",
    price: 96,
    originalPrice: 120,
    rating: 4.7,
    reviewCount: 187,
    images: [beauty3, beauty2],
    colors: [],
    sizes: ["50ml", "100ml"],
    stock: 11,
    specifications: { Family: "Amber woody", Longevity: "8 hours", Volume: "50 ml" },
    popular: true,
  },
  {
    id: "clay-clarifying-mask",
    name: "Clay Clarifying Mask",
    description: "A weekly reset with kaolin clay and oat extract.",
    category: "Beauty",
    categorySlug: "beauty",
    brand: "Sola",
    price: 22,
    originalPrice: 29,
    rating: 4.2,
    reviewCount: 142,
    images: [beauty2, beauty3],
    colors: [],
    sizes: [],
    stock: 0,
    specifications: { Volume: "75 ml", Use: "Weekly", Key: "Kaolin + oat" },
  },
  // Home & Kitchen
  {
    id: "terracotta-dinner-set",
    name: "Terracotta Dinner Set",
    description: "Twelve pieces of hand-glazed stoneware for slow dinners.",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    brand: "Ashvale Home",
    price: 120,
    originalPrice: 170,
    rating: 4.8,
    reviewCount: 340,
    images: [home1, home3, home2],
    colors: [CLAY, CREAM],
    sizes: ["4 piece", "12 piece"],
    stock: 14,
    specifications: { Pieces: "12", Material: "Stoneware", Dishwasher: "Safe", Origin: "Portugal" },
    popular: true,
    bestSeller: true,
    deal: true,
  },
  {
    id: "copper-stovetop-kettle",
    name: "Copper Stovetop Kettle",
    description: "Hand-finished copper with a heat-resistant handle.",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    brand: "Ashvale Home",
    price: 88,
    originalPrice: 110,
    rating: 4.5,
    reviewCount: 129,
    images: [home2, home1],
    colors: [AMBER],
    sizes: ["1.2L", "1.8L"],
    stock: 21,
    specifications: { Capacity: "1.8 L", Material: "Copper", Induction: "Compatible" },
  },
  {
    id: "woven-throw-blanket",
    name: "Woven Throw Blanket",
    description: "Loom-woven cotton throw with hand-knotted fringe.",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    brand: "Northbank",
    price: 64,
    originalPrice: 85,
    rating: 4.6,
    reviewCount: 208,
    images: [home3, home1],
    colors: [SAND, CREAM, CLAY],
    sizes: [],
    stock: 27,
    specifications: { Size: "130 x 170 cm", Material: "Cotton", Care: "Machine wash cold" },
    popular: true,
  },
  {
    id: "ceramic-candle-amber",
    name: "Amber Ceramic Candle",
    description: "Forty hours of amber and smoked vanilla in a reusable vessel.",
    category: "Home & Kitchen",
    categorySlug: "home-kitchen",
    brand: "Maison Dusk",
    price: 38,
    originalPrice: 46,
    rating: 4.4,
    reviewCount: 174,
    images: [home3, home2],
    colors: [CLAY, CREAM],
    sizes: [],
    stock: 52,
    specifications: { Burn: "40 hours", Wax: "Soy blend", Vessel: "Glazed ceramic" },
  },
  // Grocery
  {
    id: "pantry-staples-trio",
    name: "Pantry Staples Trio",
    description: "Heirloom grains, raw honey and toasted nuts in glass jars.",
    category: "Grocery",
    categorySlug: "grocery",
    brand: "Field & Jar",
    price: 46,
    originalPrice: 58,
    rating: 4.5,
    reviewCount: 92,
    images: [grocery1, grocery3],
    colors: [],
    sizes: [],
    stock: 38,
    specifications: { Contents: "3 jars", Organic: "Certified", Shelf: "12 months" },
    popular: true,
  },
  {
    id: "single-origin-coffee",
    name: "Single Origin Coffee",
    description: "Medium roast with cocoa and dried fig, roasted weekly.",
    category: "Grocery",
    categorySlug: "grocery",
    brand: "Field & Jar",
    price: 19,
    originalPrice: 24,
    rating: 4.7,
    reviewCount: 458,
    images: [grocery2, grocery1],
    colors: [],
    sizes: ["250g", "500g", "1kg"],
    stock: 74,
    specifications: { Roast: "Medium", Origin: "Colombia", Notes: "Cocoa, fig", Grind: "Whole bean" },
    bestSeller: true,
    deal: true,
  },
  {
    id: "cold-pressed-olive-oil",
    name: "Cold Pressed Olive Oil",
    description: "First-press oil from a single grove, bottled in dark glass.",
    category: "Grocery",
    categorySlug: "grocery",
    brand: "Olivar",
    price: 27,
    originalPrice: 34,
    rating: 4.6,
    reviewCount: 163,
    images: [grocery3, grocery1],
    colors: [],
    sizes: ["500ml", "750ml"],
    stock: 29,
    specifications: { Volume: "750 ml", Acidity: "0.3%", Harvest: "2025" },
    popular: true,
  },
  {
    id: "wildflower-honey",
    name: "Wildflower Honey",
    description: "Unfiltered honey from hillside apiaries.",
    category: "Grocery",
    categorySlug: "grocery",
    brand: "Field & Jar",
    price: 14,
    originalPrice: 18,
    rating: 4.4,
    reviewCount: 118,
    images: [grocery1, grocery2],
    colors: [],
    sizes: ["340g"],
    stock: 63,
    specifications: { Weight: "340 g", Raw: "Yes", Origin: "Spain" },
  },
  // Sports
  {
    id: "cork-yoga-mat",
    name: "Cork Yoga Mat",
    description: "Natural cork surface with a grippy rubber base.",
    category: "Sports",
    categorySlug: "sports",
    brand: "Rise",
    price: 78,
    originalPrice: 98,
    rating: 4.6,
    reviewCount: 246,
    images: [sports1, sports3],
    colors: [SAND, CLAY],
    sizes: ["4mm", "6mm"],
    stock: 22,
    specifications: { Thickness: "4 mm", Material: "Cork + rubber", Length: "183 cm" },
    popular: true,
  },
  {
    id: "trail-runner-shoes",
    name: "Trail Runner Shoes",
    description: "Cushioned trail shoes with a breathable knit upper.",
    category: "Sports",
    categorySlug: "sports",
    brand: "Rise",
    price: 132,
    originalPrice: 175,
    rating: 4.5,
    reviewCount: 389,
    images: [sports2, sports1],
    colors: [SAND, CLAY, ESPRESSO],
    sizes: SHOE_SIZES,
    stock: 17,
    specifications: { Drop: "6 mm", Weight: "268 g", Outsole: "Rubber lug", Use: "Trail" },
    bestSeller: true,
    deal: true,
  },
  {
    id: "insulated-bottle",
    name: "Insulated Bottle 750ml",
    description: "Keeps cold for 24 hours, hot for 12, in matte clay.",
    category: "Sports",
    categorySlug: "sports",
    brand: "Rise",
    price: 34,
    originalPrice: 44,
    rating: 4.3,
    reviewCount: 204,
    images: [sports3, sports2],
    colors: [CLAY, CREAM, OLIVE],
    sizes: ["500ml", "750ml"],
    stock: 48,
    specifications: { Capacity: "750 ml", Insulation: "Double wall", Material: "Stainless steel" },
  },
  {
    id: "hex-dumbbell-pair",
    name: "Hex Dumbbell Pair",
    description: "Powder-coated hex dumbbells that sit flat and quiet.",
    category: "Sports",
    categorySlug: "sports",
    brand: "Rise",
    price: 96,
    originalPrice: 124,
    rating: 4.4,
    reviewCount: 87,
    images: [sports3, sports1],
    colors: [ESPRESSO],
    sizes: ["5kg", "8kg", "12kg"],
    stock: 7,
    specifications: { Weight: "8 kg each", Coating: "Powder", Grip: "Knurled" },
  },
  // Accessories
  {
    id: "leather-crossbody-bag",
    name: "Leather Crossbody Bag",
    description: "Vegetable-tanned leather with an adjustable strap.",
    category: "Accessories",
    categorySlug: "accessories",
    brand: "Solene",
    price: 148,
    originalPrice: 195,
    rating: 4.7,
    reviewCount: 265,
    images: [accessories1, accessories3],
    colors: [ESPRESSO, CLAY, SAND],
    sizes: [],
    stock: 13,
    specifications: { Material: "Full-grain leather", Strap: "Adjustable", Pockets: "3", Origin: "Italy" },
    popular: true,
    bestSeller: true,
  },
  {
    id: "tortoise-round-sunglasses",
    name: "Tortoise Round Sunglasses",
    description: "Hand-polished acetate frames with polarised lenses.",
    category: "Accessories",
    categorySlug: "accessories",
    brand: "Solene",
    price: 86,
    originalPrice: 118,
    rating: 4.4,
    reviewCount: 172,
    images: [accessories2, accessories1],
    colors: [ESPRESSO, AMBER],
    sizes: [],
    stock: 26,
    specifications: { Lens: "Polarised", Frame: "Acetate", UV: "400 protection" },
    deal: true,
  },
  {
    id: "meridian-leather-watch",
    name: "Meridian Leather Watch",
    description: "A quiet dial, sapphire crystal and a tan leather strap.",
    category: "Accessories",
    categorySlug: "accessories",
    brand: "Meridian",
    price: 210,
    originalPrice: 260,
    rating: 4.8,
    reviewCount: 141,
    images: [accessories3, accessories1],
    colors: [CLAY, ESPRESSO],
    sizes: ["36mm", "40mm"],
    stock: 5,
    specifications: { Case: "40 mm", Crystal: "Sapphire", Movement: "Quartz", Water: "5 ATM" },
    popular: true,
    bestSeller: true,
  },
  {
    id: "woven-belt",
    name: "Woven Leather Belt",
    description: "A braided belt that finds its own notch, every time.",
    category: "Accessories",
    categorySlug: "accessories",
    brand: "Northbank",
    price: 52,
    originalPrice: 68,
    rating: 4.2,
    reviewCount: 78,
    images: [accessories1, accessories2],
    colors: [ESPRESSO, CLAY],
    sizes: ["S", "M", "L"],
    stock: 34,
    specifications: { Material: "Braided leather", Buckle: "Brass", Width: "3.2 cm" },
  },
];

export const products: Product[] = raw.map((p) => ({
  ...p,
  discount: Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100),
}));

export const getProductById = (id: string) => products.find((p) => p.id === id);

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const productsByCategory = (slug: string) => products.filter((p) => p.categorySlug === slug);

export const popularProducts = products.filter((p) => p.popular);
export const bestSellers = products.filter((p) => p.bestSeller);
export const dealProducts = products.filter((p) => p.deal);

export const searchProducts = (query: string): Product[] => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q),
  );
};

export const relatedProducts = (product: Product, limit = 4) =>
  products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, limit);

export const ratingDistribution = (product: Product) => {
  const base = product.rating;
  const weights = [
    Math.max(0.05, (base - 3) / 2),
    Math.max(0.05, (base - 2.6) / 3),
    0.12,
    0.06,
    0.04,
  ];
  const sum = weights.reduce((a, b) => a + b, 0);
  return [5, 4, 3, 2, 1].map((stars, i) => {
    const w = weights[i] ?? 0;
    return {
      stars,
      percent: Math.round((w / sum) * 100),
      count: Math.round((w / sum) * product.reviewCount),
    };
  });
};
