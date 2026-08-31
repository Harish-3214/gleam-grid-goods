import { Link } from "@tanstack/react-router";
import type { Category } from "@/data/products";

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link
      to="/category/$category"
      params={{ category: category.slug }}
      className="group block overflow-hidden rounded-xl surface transition-shadow hover:shadow-soft"
    >
      <div className="aspect-square overflow-hidden bg-sun/50">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          width={512}
          height={512}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="px-3 py-2.5">
        <p className="text-sm font-medium">{category.name}</p>
        <p className="text-xs text-dust">{count} items</p>
      </div>
    </Link>
  );
}
