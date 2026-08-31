import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { categories, searchProducts } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

export function SearchBar({ initialQuery = "", className }: { initialQuery?: string; className?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const suggestions = useMemo(() => searchProducts(query).slice(0, 5), [query]);
  const categoryHits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return categories.filter((c) => c.name.toLowerCase().includes(q)).slice(0, 3);
  }, [query]);

  const submit = (value: string) => {
    setOpen(false);
    navigate({ to: "/search", search: { q: value } });
  };

  return (
    <div ref={wrapRef} className={cn("relative w-full", className)}>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          submit(query);
        }}
      >
        <label htmlFor="site-search" className="sr-only">
          Search products
        </label>
        <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-dust" />
        <input
          id="site-search"
          type="search"
          value={query}
          autoComplete="off"
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search dresses, speakers, skincare…"
          className="w-full rounded-full bg-card/80 py-2.5 pl-9 pr-9 text-sm ring-1 ring-ink/10 placeholder:text-dust/70 focus:outline-none focus:ring-2 focus:ring-brand/40 [&::-webkit-search-cancel-button]:appearance-none"
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            className="absolute right-2.5 top-1/2 grid size-6 -translate-y-1/2 place-items-center rounded-full text-dust hover:bg-ink/5"
          >
            <X size={14} />
          </button>
        )}
      </form>

      {open && query.trim() && (
        <div className="absolute inset-x-0 top-full z-50 mt-2 overflow-hidden rounded-2xl bg-card shadow-lift ring-1 ring-ink/10">
          {categoryHits.length === 0 && suggestions.length === 0 ? (
            <p className="px-4 py-5 text-sm text-ink/60">No products found for “{query}”.</p>
          ) : (
            <ul className="max-h-80 overflow-y-auto py-1">
              {categoryHits.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/category/$category"
                    params={{ category: c.slug }}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-sun/40"
                  >
                    <span className="grid size-9 place-items-center rounded-lg bg-sun/60 text-[10px] font-semibold uppercase text-brand">
                      Cat
                    </span>
                    <span>
                      Browse <span className="font-medium">{c.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
              {suggestions.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/product/$id"
                    params={{ id: p.id }}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-sun/40"
                  >
                    <img src={p.images[0]} alt="" loading="lazy" className="size-9 rounded-lg object-cover" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{p.name}</span>
                      <span className="block text-xs text-dust">{p.category}</span>
                    </span>
                    <span className="text-sm font-medium">{formatPrice(p.price)}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => submit(query)}
                  className="w-full px-4 py-2.5 text-left text-sm font-medium text-brand hover:bg-sun/40"
                >
                  See all results for “{query}”
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
