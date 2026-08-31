import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuantitySelector({
  quantity,
  onChange,
  max = 99,
  className,
  label = "Quantity",
}: {
  quantity: number;
  onChange: (value: number) => void;
  max?: number;
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)} role="group" aria-label={label}>
      <button
        type="button"
        onClick={() => onChange(quantity - 1)}
        aria-label="Decrease quantity"
        className="grid size-8 place-items-center rounded-full ring-1 ring-ink/10 transition-colors hover:bg-ink/5"
      >
        <Minus size={14} />
      </button>
      <span className="w-6 text-center text-sm font-medium tabular-nums">{quantity}</span>
      <button
        type="button"
        onClick={() => onChange(Math.min(quantity + 1, max))}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="grid size-8 place-items-center rounded-full ring-1 ring-ink/10 transition-colors hover:bg-ink/5 disabled:opacity-40"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
