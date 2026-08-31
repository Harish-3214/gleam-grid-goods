import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function EmptyState({
  title,
  body,
  icon,
  action,
}: {
  title: string;
  body: string;
  icon?: ReactNode;
  action?: { label: string; to: "/" | "/products" | "/wishlist" | "/cart" };
}) {
  return (
    <div className="rounded-2xl surface px-6 py-16 text-center">
      {icon && <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-sun/60 text-brand">{icon}</div>}
      <h3 className="font-display text-lg font-semibold">{title}</h3>
      <p className="mx-auto mt-2 max-w-[42ch] text-sm text-ink/60">{body}</p>
      {action && (
        <Link
          to={action.to}
          className="mt-6 inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}
