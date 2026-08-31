import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { RatingStars } from "./RatingStars";
import { WishlistButton } from "./WishlistButton";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard({ product }: { product: Product }) {
  const lowStock = product.stock > 0 && product.stock <= 8;
  const cover = product.images[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl surface transition-shadow duration-300 hover:shadow-lift">
      <Link
        to="/product/$id"
        params={{ id: product.id }}
        className="relative block overflow-hidden bg-sun/40"
        aria-label={product.name}
      >
        <img
          src={cover}
          alt={product.name}
          loading="lazy"
          width={640}
          height={640}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.discount > 0 && (
          <span className="absolute left-2 top-2 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold text-brand-foreground">
            -{product.discount}%
          </span>
        )}
        {product.stock === 0 && (
          <span className="absolute inset-x-0 bottom-0 bg-ink/75 py-1.5 text-center text-[11px] font-medium uppercase tracking-wider text-sand">
            Out of stock
          </span>
        )}
      </Link>
      <WishlistButton product={product} className="absolute" />

      <div className="flex flex-1 flex-col p-3">
        <p className="text-[11px] uppercase tracking-wide text-dust">{product.category}</p>
        <Link to="/product/$id" params={{ id: product.id }} className="mt-0.5 line-clamp-1 text-sm font-medium hover:text-brand">
          {product.name}
        </Link>
        <p className="mt-1 line-clamp-2 text-xs text-ink/60">{product.description}</p>

        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-ink/70">
          <RatingStars rating={product.rating} size={13} />
          <span className="font-medium">{product.rating.toFixed(1)}</span>
          <span className="text-dust">({product.reviewCount})</span>
        </div>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-semibold">{formatPrice(product.price)}</span>
          <span className="text-xs text-dust line-through">{formatPrice(product.originalPrice)}</span>
        </div>

        <p className="mt-1 text-[11px] text-dust">
          {product.stock === 0 ? "Sold out" : lowStock ? `Only ${product.stock} left` : "In stock"}
        </p>

        <AddToCartButton product={product} className="mt-3" />
      </div>
    </article>
  );
}
