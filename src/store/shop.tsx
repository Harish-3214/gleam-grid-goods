import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { products, type Product } from "@/data/products";

export type CartLine = {
  key: string;
  productId: string;
  quantity: number;
  color?: string;
  size?: string;
};

type ShopState = {
  cart: CartLine[];
  wishlist: string[];
  hydrated: boolean;
  addToCart: (product: Product, options?: { quantity?: number; color?: string; size?: string; silent?: boolean }) => void;
  setQuantity: (key: string, quantity: number) => void;
  removeFromCart: (key: string) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isWishlisted: (id: string) => boolean;
  cartCount: number;
  subtotal: number;
  discount: number;
  delivery: number;
  total: number;
  lineProduct: (line: CartLine) => Product | undefined;
};

const CART_KEY = "ashvale.cart.v1";
const WISH_KEY = "ashvale.wishlist.v1";
const FREE_DELIVERY_THRESHOLD = 150;
const DELIVERY_FEE = 8;

const ShopContext = createContext<ShopState | null>(null);

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCart(readStorage<CartLine[]>(CART_KEY, []));
    setWishlist(readStorage<string[]>(WISH_KEY, []));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (hydrated) localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  const lineProduct = useCallback((line: CartLine) => products.find((p) => p.id === line.productId), []);

  const addToCart: ShopState["addToCart"] = useCallback((product, options = {}) => {
    const { quantity = 1, color, size, silent } = options;
    const key = [product.id, color ?? "", size ?? ""].join("|");
    setCart((prev) => {
      const existing = prev.find((l) => l.key === key);
      if (existing) {
        return prev.map((l) =>
          l.key === key ? { ...l, quantity: Math.min(l.quantity + quantity, Math.max(product.stock, 1)) } : l,
        );
      }
      return [...prev, { key, productId: product.id, quantity, color, size }];
    });
    if (!silent) toast.success("Added to your bag", { description: product.name });
  }, []);

  const setQuantity = useCallback((key: string, quantity: number) => {
    setCart((prev) =>
      quantity <= 0 ? prev.filter((l) => l.key !== key) : prev.map((l) => (l.key === key ? { ...l, quantity } : l)),
    );
  }, []);

  const removeFromCart = useCallback((key: string) => {
    setCart((prev) => prev.filter((l) => l.key !== key));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((product: Product) => {
    setWishlist((prev) => {
      if (prev.includes(product.id)) {
        toast("Removed from wishlist", { description: product.name });
        return prev.filter((id) => id !== product.id);
      }
      toast.success("Saved to wishlist", { description: product.name });
      return [...prev, product.id];
    });
  }, []);

  const isWishlisted = useCallback((id: string) => wishlist.includes(id), [wishlist]);

  const { cartCount, subtotal, discount } = useMemo(() => {
    let count = 0;
    let sub = 0;
    let saved = 0;
    for (const line of cart) {
      const product = products.find((p) => p.id === line.productId);
      if (!product) continue;
      count += line.quantity;
      sub += product.originalPrice * line.quantity;
      saved += (product.originalPrice - product.price) * line.quantity;
    }
    return { cartCount: count, subtotal: sub, discount: saved };
  }, [cart]);

  const payable = subtotal - discount;
  const delivery = payable === 0 || payable >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;

  const value: ShopState = {
    cart,
    wishlist,
    hydrated,
    addToCart,
    setQuantity,
    removeFromCart,
    clearCart,
    toggleWishlist,
    isWishlisted,
    cartCount,
    subtotal,
    discount,
    delivery,
    total: payable + delivery,
    lineProduct,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used inside ShopProvider");
  return ctx;
}
