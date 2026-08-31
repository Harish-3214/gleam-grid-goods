import { createFileRoute } from "@tanstack/react-router";
import { SearchIcon } from "lucide-react";
import { searchProducts } from "@/data/products";
import { SearchBar } from "@/components/SearchBar";
import { ProductGrid } from "@/components/ProductGrid";
import { EmptyState } from "@/components/EmptyState";

type SearchParams = { q: string };

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    q: typeof search["q"] === "string" ? search["q"] : "",
  }),
  head: () => ({
    meta: [
      { title: "Search products — Ashvale" },
      { name: "description", content: "Search the Ashvale storefront by product name, brand or category." },
      { property: "og:title", content: "Search products — Ashvale" },
      { property: "og:description", content: "Find the piece you're after across every Ashvale category." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const results = searchProducts(q);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold">Search</h1>
        <div className="mt-4 max-w-xl">
          <SearchBar initialQuery={q} />
        </div>
        {q && (
          <p className="mt-3 text-sm text-ink/60">
            {results.length} {results.length === 1 ? "result" : "results"} for “{q}”
          </p>
        )}
      </header>

      {!q ? (
        <EmptyState
          title="Start typing to search"
          body="Search by product name, brand or category — results update as you type."
          icon={<SearchIcon size={20} />}
        />
      ) : (
        <ProductGrid
          products={results}
          emptyTitle="No products found"
          emptyBody={`We couldn't find anything matching “${q}”. Try a broader term or browse a category.`}
        />
      )}
    </div>
  );
}
