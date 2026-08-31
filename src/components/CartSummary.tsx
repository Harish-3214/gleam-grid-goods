import { Link } from "@tanstack/react-router";
import { useShop } from "@/store/shop";
import { formatPrice } from "@/lib/format";

export function CartSummary({ showActions = true }: { showActions?: boolean }) {
  const { subtotal, discount, delivery, total, cartCount } = useShop();

  return (
    <div className="rounded-2xl bg-sun/50 p-5 ring-1 ring-ink/5">
      <h2 className="font-display text-lg font-semibold">Order summary</h2>
      <dl className="mt-4 space-y-2.5 text-sm">
        <div className="flex justify-between">
          <dt className="text-ink/70">Total items</dt>
          <dd className="font-medium">{cartCount}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink/70">Subtotal</dt>
          <dd className="font-medium">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink/70">Discount</dt>
          <dd className="font-medium text-brand">-{formatPrice(discount)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-ink/70">Delivery</dt>
          <dd className="font-medium">{delivery === 0 ? "Free" : formatPrice(delivery)}</dd>
        </div>
        <div className="flex justify-between border-t border-ink/10 pt-3 text-base">
          <dt className="font-semibold">Total</dt>
          <dd className="font-semibold">{formatPrice(total)}</dd>
        </div>
      </dl>
      {showActions && (
        <>
          <Link
            to="/checkout"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-brand py-2.5 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
          >
            Proceed to checkout
          </Link>
          <Link
            to="/products"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full py-2.5 text-sm font-medium text-ink/70 transition-colors hover:bg-card"
          >
            Continue shopping
          </Link>
        </>
      )}
    </div>
  );
}
