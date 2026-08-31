import { useState } from "react";
import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { getProductById, ratingDistribution, relatedProducts } from "@/data/products";
import { useShop } from "@/store/shop";
import { formatPrice } from "@/lib/format";
import { ProductGallery } from "@/components/ProductGallery";
import { RatingStars } from "@/components/RatingStars";
import { QuantitySelector } from "@/components/QuantitySelector";
import { AddToCartButton } from "@/components/AddToCartButton";
import { WishlistButton } from "@/components/WishlistButton";
import { ProductCard } from "@/components/ProductCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/product/$id")({
  loader: ({ params }) => {
    const product = getProductById(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable — Ashvale" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — Ashvale`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const navigate = useNavigate();
  const { addToCart } = useShop();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(product.colors[0]?.name);
  const [size, setSize] = useState(product.sizes[0]);
  const distribution = ratingDistribution(product);
  const related = relatedProducts(product);

  const buyNow = () => {
    addToCart(product, { quantity, color, size, silent: true });
    navigate({ to: "/cart" });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
      <nav aria-label="Breadcrumb" className="mb-5 text-xs text-dust">
        <Link to="/" className="hover:text-brand">
          Home
        </Link>
        <span className="px-1.5">/</span>
        <Link to="/category/$category" params={{ category: product.categorySlug }} className="hover:text-brand">
          {product.category}
        </Link>
        <span className="px-1.5">/</span>
        <span className="text-ink/70">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery images={product.images} alt={product.name} />

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-brand">{product.brand}</p>
          <h1 className="mt-2 text-3xl font-semibold">{product.name}</h1>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            <RatingStars rating={product.rating} size={16} />
            <span className="font-medium">{product.rating.toFixed(1)}/5</span>
            <span className="text-dust">· {product.reviewCount} reviews</span>
            <span className="text-dust">· {product.category}</span>
          </div>

          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <span className="text-3xl font-semibold">{formatPrice(product.price)}</span>
            <span className="text-sm text-dust line-through">{formatPrice(product.originalPrice)}</span>
            <span className="rounded-full bg-brand px-2 py-0.5 text-xs font-semibold text-brand-foreground">
              -{product.discount}%
            </span>
          </div>

          <p className="mt-4 max-w-[55ch] text-pretty text-sm text-ink/70">{product.description}</p>

          <p className={cn("mt-3 text-sm font-medium", product.stock === 0 ? "text-destructive" : "text-ink/70")}>
            {product.stock === 0
              ? "Out of stock"
              : product.stock <= 8
                ? `Only ${product.stock} left in stock`
                : "In stock, ready to ship"}
          </p>

          {product.colors.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-medium">
                Colour: <span className="text-ink/60">{color}</span>
              </p>
              <div className="mt-2 flex gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setColor(c.name)}
                    aria-label={c.name}
                    aria-pressed={color === c.name}
                    style={{ backgroundColor: c.hex }}
                    className={cn(
                      "size-8 rounded-full ring-1 ring-ink/15 transition",
                      color === c.name && "ring-2 ring-brand ring-offset-2 ring-offset-sand",
                    )}
                  />
                ))}
              </div>
            </div>
          )}

          {product.sizes.length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-medium">
                Size: <span className="text-ink/60">{size}</span>
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    aria-pressed={size === s}
                    className={cn(
                      "rounded-full px-4 py-1.5 text-sm ring-1 transition",
                      size === s ? "bg-ink text-sand ring-ink" : "ring-ink/15 hover:ring-brand/50",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <QuantitySelector quantity={quantity} onChange={(q) => setQuantity(Math.max(1, q))} max={Math.max(product.stock, 1)} />
            <AddToCartButton product={product} quantity={quantity} color={color} size={size} className="w-auto flex-1 px-6" />
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={buyNow}
              disabled={product.stock === 0}
              className="flex-1 rounded-full bg-brand px-6 py-2.5 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90 disabled:bg-brand/30"
            >
              Buy now
            </button>
            <WishlistButton product={product} variant="full" />
          </div>

          <ul className="mt-6 space-y-2 rounded-2xl surface p-4 text-sm text-ink/70">
            <li className="flex items-center gap-2">
              <Truck size={16} className="text-brand" /> Free delivery on orders over $150 · 2–4 working days
            </li>
            <li className="flex items-center gap-2">
              <RotateCcw size={16} className="text-brand" /> 30-day free returns
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand" /> Two-year Ashvale guarantee
            </li>
          </ul>
        </div>
      </div>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Specifications</h2>
          <dl className="mt-4 overflow-hidden rounded-2xl surface text-sm">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between gap-4 border-b border-ink/5 px-4 py-3 last:border-0">
                <dt className="text-ink/60">{key}</dt>
                <dd className="text-right font-medium">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Ratings & reviews</h2>
          <div className="mt-4 rounded-2xl surface p-5">
            <div className="flex items-center gap-5">
              <div>
                <p className="font-display text-4xl font-semibold">{product.rating.toFixed(1)}</p>
                <RatingStars rating={product.rating} size={15} className="mt-1" />
                <p className="mt-1 text-xs text-dust">{product.reviewCount} reviews</p>
              </div>
              <div className="min-w-0 flex-1 space-y-1.5">
                {distribution.map((row) => (
                  <div key={row.stars} className="flex items-center gap-2 text-xs">
                    <span className="w-3 text-dust">{row.stars}</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink/10">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${row.percent}%` }} />
                    </div>
                    <span className="w-8 text-right text-dust">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-5 text-xl font-semibold">You may also like</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
