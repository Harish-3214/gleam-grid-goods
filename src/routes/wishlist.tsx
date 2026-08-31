import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { products } from "@/data/products";
import { useShop } from "@/store/shop";
import { ProductCard } from "@/components/ProductCard";
import { EmptyState } from "@/components/EmptyState";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — Ashvale" },
      { name: "description", content: "Everything you've saved at Ashvale, ready to move into your bag." },
      { property: "og:title", content: "Wishlist — Ashvale" },
      { property: "og:description", content: "Everything you've saved at Ashvale." },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist, hydrated, addToCart } = useShop();
  const saved = products.filter((p) => wishlist.includes(p.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold">Wishlist</h1>
          <p className="mt-2 text-sm text-ink/60">{saved.length} saved items</p>
        </div>
        {saved.length > 0 && (
          <button
            type="button"
            onClick={() => saved.filter((p) => p.stock > 0).forEach((p) => addToCart(p, { silent: true }))}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-sand transition-colors hover:bg-ink/90"
          >
            Move all to bag
          </button>
        )}
      </div>

      <div className="mt-6">
        {!hydrated ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="aspect-[3/4] animate-pulse rounded-xl bg-ink/5" />
            ))}
          </div>
        ) : saved.length === 0 ? (
          <EmptyState
            title="No favourites yet"
            body="Tap the heart on any product to keep it here for later."
            icon={<Heart size={20} />}
            action={{ label: "Browse products", to: "/products" }}
          />
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {saved.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
