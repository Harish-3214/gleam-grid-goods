import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useShop } from "@/store/shop";
import { CartItem } from "@/components/CartItem";
import { CartSummary } from "@/components/CartSummary";
import { EmptyState } from "@/components/EmptyState";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shopping bag — Ashvale" },
      { name: "description", content: "Review the items in your Ashvale shopping bag and continue to checkout." },
      { property: "og:title", content: "Shopping bag — Ashvale" },
      { property: "og:description", content: "Review your Ashvale bag and checkout." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { cart, cartCount, hydrated } = useShop();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="text-3xl font-semibold">Your bag</h1>
      <p className="mt-2 text-sm text-ink/60">{cartCount} items</p>

      {!hydrated ? (
        <div className="mt-6 space-y-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-24 animate-pulse rounded-2xl bg-ink/5" />
          ))}
        </div>
      ) : cart.length === 0 ? (
        <div className="mt-6">
          <EmptyState
            title="Your bag is empty"
            body="Once you add something you like, it will show up here."
            icon={<ShoppingBag size={20} />}
            action={{ label: "Start shopping", to: "/products" }}
          />
        </div>
      ) : (
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 rounded-2xl surface p-4 sm:p-5">
            {cart.map((line) => (
              <CartItem key={line.key} line={line} />
            ))}
          </div>
          <div className="lg:sticky lg:top-40 lg:self-start">
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
}
