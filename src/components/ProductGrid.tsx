import type { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { EmptyState } from "./EmptyState";

export function ProductGrid({
  products,
  emptyTitle = "No products found",
  emptyBody = "Try a different search or browse another category.",
}: {
  products: Product[];
  emptyTitle?: string;
  emptyBody?: string;
}) {
  if (products.length === 0) {
    return <EmptyState title={emptyTitle} body={emptyBody} />;
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
