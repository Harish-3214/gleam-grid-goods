import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import dealsImage from "@/assets/deals.jpg";
import { categories, popularProducts, bestSellers, productsByCategory } from "@/data/products";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashvale — Everyday essentials, thoughtfully made" },
      {
        name: "description",
        content:
          "Shop curated fashion, electronics, beauty and home goods at Ashvale. Warm design, honest prices, free delivery over $150.",
      },
      { property: "og:title", content: "Ashvale — Everyday essentials, thoughtfully made" },
      {
        property: "og:description",
        content: "Curated fashion, tech and home goods with a warm, considered touch.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <section className="pt-6 sm:pt-10">
        <div className="relative overflow-hidden rounded-3xl bg-sun ring-1 ring-ink/5">
          <div className="grid items-center md:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-14">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
                <span className="size-1.5 rounded-full bg-brand" />
                New season drop
              </span>
              <h1 className="mt-4 max-w-[18ch] text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Everyday essentials, thoughtfully made
              </h1>
              <p className="mt-4 max-w-[40ch] text-pretty text-base text-ink/70">
                Curated fashion, tech and home goods with a warm, considered touch. Quality you can feel, priced to be
                generous.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-brand py-2.5 pl-5 pr-4 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
                >
                  Shop the collection
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#categories"
                  className="inline-flex items-center rounded-full bg-card/70 px-5 py-2.5 text-sm font-medium text-ink/80 ring-1 ring-ink/5 transition-colors hover:bg-card"
                >
                  Browse categories
                </a>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <img
                src={heroImage}
                alt="Linen apparel and amber ceramics laid out in warm daylight"
                width={1080}
                height={900}
                className="aspect-[6/5] w-full rounded-2xl object-cover ring-1 ring-ink/5 md:aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="categories" className="scroll-mt-24 pt-12 sm:pt-16">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Shop by category</h2>
          <Link to="/products" className="text-sm font-medium text-brand hover:text-brand/80">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} count={productsByCategory(c.slug).length} />
          ))}
        </div>
      </section>

      <section className="pt-12 sm:pt-16">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Popular right now</h2>
          <Link to="/products" className="text-sm font-medium text-brand hover:text-brand/80">
            See all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {popularProducts.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="pt-12 sm:pt-16">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Best sellers</h2>
          <Link to="/products" className="text-sm font-medium text-brand hover:text-brand/80">
            See all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {bestSellers.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="pb-16 pt-12 sm:pt-16">
        <div className="overflow-hidden rounded-3xl bg-brand text-sand ring-1 ring-brand/40">
          <div className="grid items-center md:grid-cols-[1.2fr_1fr]">
            <div className="p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sun/80">Weekend deals</span>
              <h2 className="mt-3 max-w-[24ch] text-balance text-3xl font-semibold leading-tight text-sand">
                Up to 40% off best-sellers, ends Sunday
              </h2>
              <p className="mt-3 max-w-[44ch] text-pretty text-base text-sand/80">
                Hand-picked favorites across fashion, home and beauty. Warm prices, no fine print.
              </p>
              <Link
                to="/products"
                search={{ deals: true }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-sand py-2.5 pl-5 pr-4 text-sm font-medium text-ink transition-colors hover:bg-sun"
              >
                Shop the deals
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="p-4 md:p-6 md:pr-8">
              <img
                src={dealsImage}
                alt="Discounted apparel and home goods arranged on warm sand"
                loading="lazy"
                width={900}
                height={720}
                className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-ink/5 md:aspect-[5/4]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
