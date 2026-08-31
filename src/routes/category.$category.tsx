import { createFileRoute, notFound } from "@tanstack/react-router";
import { getCategory, productsByCategory } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";

export const Route = createFileRoute("/category/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Category unavailable — Ashvale" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.category.name} — Ashvale`;
    return {
      meta: [
        { title },
        { name: "description", content: `${loaderData.category.name}: ${loaderData.category.blurb}. Shop the Ashvale selection.` },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.category.blurb },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const list = productsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-6">
        <p className="text-xs uppercase tracking-[0.18em] text-brand">Category</p>
        <h1 className="mt-2 text-3xl font-semibold">{category.name}</h1>
        <p className="mt-2 text-sm text-ink/60">
          {category.blurb} · {list.length} products
        </p>
      </header>
      <ProductGrid products={list} emptyTitle="Nothing here yet" emptyBody="This category is being restocked." />
    </div>
  );
}
