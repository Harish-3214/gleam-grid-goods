import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-[10px] bg-brand font-display font-semibold text-sun">A</span>
              <span className="font-display text-lg font-semibold">Ashvale</span>
            </Link>
            <p className="mt-3 max-w-[36ch] text-sm text-ink/60">
              Considered goods for everyday living. Shipped warm, priced fair.
            </p>
          </div>
          <div className="flex gap-10 text-sm">
            <div>
              <p className="mb-2 font-medium">Shop</p>
              <Link to="/category/$category" params={{ category: "fashion" }} className="block py-1 text-ink/60 hover:text-brand">
                Fashion
              </Link>
              <Link to="/category/$category" params={{ category: "electronics" }} className="block py-1 text-ink/60 hover:text-brand">
                Electronics
              </Link>
              <Link to="/category/$category" params={{ category: "beauty" }} className="block py-1 text-ink/60 hover:text-brand">
                Beauty
              </Link>
            </div>
            <div>
              <p className="mb-2 font-medium">Your account</p>
              <Link to="/wishlist" className="block py-1 text-ink/60 hover:text-brand">
                Wishlist
              </Link>
              <Link to="/cart" className="block py-1 text-ink/60 hover:text-brand">
                Shopping bag
              </Link>
              <Link to="/products" className="block py-1 text-ink/60 hover:text-brand">
                All products
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-dust">© {new Date().getFullYear()} Ashvale. A demo storefront — no real products.</p>
      </div>
    </footer>
  );
}
