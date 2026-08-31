import { Link } from "@tanstack/react-router";
import { useShop, type CartLine } from "@/store/shop";
import { formatPrice } from "@/lib/format";
import { QuantitySelector } from "./QuantitySelector";

export function CartItem({ line }: { line: CartLine }) {
  const { lineProduct, setQuantity, removeFromCart } = useShop();
  const product = lineProduct(line);
  if (!product) return null;

  const meta = [line.size, line.color].filter(Boolean).join(" · ");

  return (
    <div className="flex gap-3 border-b border-ink/5 pb-4 last:border-0 last:pb-0">
      <Link to="/product/$id" params={{ id: product.id }} className="shrink-0">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="size-20 rounded-xl object-cover sm:size-24"
        />
      </Link>
      <div className="min-w-0 flex-1">
        <Link to="/product/$id" params={{ id: product.id }} className="line-clamp-1 text-sm font-medium hover:text-brand">
          {product.name}
        </Link>
        <p className="mt-0.5 text-xs text-dust">
          {meta ? `${meta} · ` : ""}
          {formatPrice(product.price)} each
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <QuantitySelector
            quantity={line.quantity}
            max={Math.max(product.stock, 1)}
            onChange={(q) => setQuantity(line.key, q)}
          />
          <button
            type="button"
            onClick={() => removeFromCart(line.key)}
            className="text-xs text-dust transition-colors hover:text-brand"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">{formatPrice(product.price * line.quantity)}</p>
        <p className="text-xs text-dust line-through">{formatPrice(product.originalPrice * line.quantity)}</p>
      </div>
    </div>
  );
}
