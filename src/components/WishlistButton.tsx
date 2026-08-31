import { Heart } from "lucide-react";
import { useShop } from "@/store/shop";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function WishlistButton({
  product,
  className,
  variant = "icon",
}: {
  product: Product;
  className?: string;
  variant?: "icon" | "full";
}) {
  const { isWishlisted, toggleWishlist } = useShop();
  const active = isWishlisted(product.id);

  if (variant === "full") {
    return (
      <button
        type="button"
        onClick={() => toggleWishlist(product)}
        aria-pressed={active}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ring-1 ring-ink/10 transition-colors hover:bg-card",
          active ? "text-brand" : "text-ink/80",
          className,
        )}
      >
        <Heart size={16} className={cn("transition-transform", active && "fill-brand scale-110")} />
        {active ? "Saved" : "Add to wishlist"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
      }}
      aria-label={active ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
      aria-pressed={active}
      className={cn(
        "grid size-8 place-items-center rounded-full bg-card/90 ring-1 ring-ink/10 transition hover:bg-card hover:scale-110",
        className,
      )}
    >
      <Heart size={16} className={cn(active ? "fill-brand text-brand" : "text-dust")} />
    </button>
  );
}
