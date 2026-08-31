import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Menu, ShoppingBag, User, X } from "lucide-react";
import { useShop } from "@/store/shop";
import { categories } from "@/data/products";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  const { cartCount, wishlist } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-sand/85 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span className="grid size-9 place-items-center rounded-xl bg-brand font-display text-lg font-semibold text-sun">A</span>
            <span className="hidden font-display text-xl font-semibold tracking-tight sm:inline">Ashvale</span>
          </Link>

          <div className="hidden min-w-0 md:block">
            <SearchBar className="max-w-xl" />
          </div>
          <div className="md:hidden" />

          <nav className="flex shrink-0 items-center gap-1">
            <Link
              to="/wishlist"
              aria-label={`Wishlist, ${wishlist.length} items`}
              className="relative grid size-10 place-items-center rounded-full transition-colors hover:bg-ink/5"
            >
              <Heart size={20} strokeWidth={1.8} />
              {wishlist.length > 0 && (
                <span className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              aria-label={`Shopping bag, ${cartCount} items`}
              className="relative grid size-10 place-items-center rounded-full transition-colors hover:bg-ink/5"
            >
              <ShoppingBag size={20} strokeWidth={1.8} />
              {cartCount > 0 && (
                <span className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-brand text-[10px] font-semibold text-brand-foreground">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              aria-label="Account"
              className="hidden size-10 place-items-center rounded-full transition-colors hover:bg-ink/5 sm:grid"
            >
              <User size={20} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full transition-colors hover:bg-ink/5 md:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </div>

        <div className="pb-3 md:hidden">
          <SearchBar />
        </div>

        <div className="hidden items-center gap-5 pb-3 text-sm md:flex">
          <Link to="/products" className="text-ink/70 transition-colors hover:text-brand" activeProps={{ className: "text-brand font-medium" }}>
            All products
          </Link>
          {categories.slice(0, 6).map((c) => (
            <Link
              key={c.slug}
              to="/category/$category"
              params={{ category: c.slug }}
              className="text-ink/70 transition-colors hover:text-brand"
              activeProps={{ className: "text-brand font-medium" }}
            >
              {c.name}
            </Link>
          ))}
        </div>

        {menuOpen && (
          <div className="grid grid-cols-2 gap-2 pb-4 md:hidden">
            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl surface px-3 py-2 text-sm font-medium"
            >
              All products
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/category/$category"
                params={{ category: c.slug }}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl surface px-3 py-2 text-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
