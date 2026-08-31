import { createFileRoute } from "@tanstack/react-router";
import { products, dealProducts } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";

type ProductsSearch = { deals?: boolean };

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>): ProductsSearch =>
    search["deals"] ? { deals: true } : {},
  head: () => ({
    meta: [
      { title: "All products — Ashvale" },
      { name: "description", content: "Browse every Ashvale product across fashion, electronics, beauty, home and more." },
      { property: "og:title", content: "All products — Ashvale" },
      { property: "og:description", content: "Browse every Ashvale product across eight categories." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { deals } = Route.useSearch();
  const list = deals ? dealProducts : products;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">{deals ? "Weekend deals" : "All products"}</h1>
        <p className="mt-2 text-sm text-ink/60">{list.length} products available</p>
      </header>
      <ProductGrid products={list} />
    </div>
  );
}
