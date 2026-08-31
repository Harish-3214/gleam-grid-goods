import { ShoppingBag } from "lucide-react";
import { useShop } from "@/store/shop";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function AddToCartButton({
  product,
  quantity = 1,
  color,
  size,
  className,
  children,
}: {
  product: Product;
  quantity?: number;
  color?: string | undefined;
  size?: string | undefined;
  className?: string;
  children?: React.ReactNode;
}) {
  const { addToCart } = useShop();
  const soldOut = product.stock === 0;

  return (
    <button
      type="button"
      disabled={soldOut}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, { quantity, color, size });
      }}
      className={cn(
        "inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-sand transition-colors hover:bg-ink/90 disabled:cursor-not-allowed disabled:bg-ink/25",
        className,
      )}
    >
      <ShoppingBag size={16} />
      {children ?? (soldOut ? "Out of stock" : "Add to cart")}
    </button>
  );
}
