import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useShop } from "@/store/shop";
import { CartSummary } from "@/components/CartSummary";
import { EmptyState } from "@/components/EmptyState";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Ashvale" },
      { name: "description", content: "Confirm your delivery details and place your Ashvale order." },
      { property: "og:title", content: "Checkout — Ashvale" },
      { property: "og:description", content: "Confirm your delivery details and place your order." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { cart, clearCart } = useShop();
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <EmptyState
          title="Order placed"
          body="This is a demo checkout, so no payment was taken. Your bag has been cleared."
          icon={<CheckCircle2 size={20} />}
          action={{ label: "Keep shopping", to: "/products" }}
        />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <EmptyState
          title="Nothing to check out"
          body="Add a few things to your bag first."
          action={{ label: "Browse products", to: "/products" }}
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="text-3xl font-semibold">Checkout</h1>
      <p className="mt-2 text-sm text-ink/60">Demo checkout — no payment is processed.</p>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <form
          className="space-y-4 rounded-2xl surface p-5"
          onSubmit={(e) => {
            e.preventDefault();
            clearCart();
            setPlaced(true);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="name" label="Full name" placeholder="Harish Kumar" />
            <Field id="email" label="Email" type="email" placeholder="you@example.com" />
          </div>
          <Field id="address" label="Delivery address" placeholder="12 Marigold Lane" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="city" label="City" placeholder="Bengaluru" />
            <Field id="zip" label="Postcode" placeholder="560001" />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-brand py-3 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
          >
            Place order
          </button>
          <Link to="/cart" className="block text-center text-sm text-ink/60 hover:text-brand">
            Back to bag
          </Link>
        </form>

        <div className="lg:sticky lg:top-40 lg:self-start">
          <CartSummary showActions={false} />
        </div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-card px-4 py-2.5 text-sm ring-1 ring-ink/10 placeholder:text-dust/70 focus:outline-none focus:ring-2 focus:ring-brand/40"
      />
    </div>
  );
}
