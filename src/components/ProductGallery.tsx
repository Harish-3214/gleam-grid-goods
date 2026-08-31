import { useState } from "react";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const [origin, setOrigin] = useState("50% 50%");
  const [zoom, setZoom] = useState(false);
  const src = images[active] ?? images[0];

  return (
    <div className="flex flex-col gap-3">
      <div
        className="overflow-hidden rounded-2xl bg-sun/40 ring-1 ring-ink/5"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
        }}
      >
        <img
          src={src}
          alt={alt}
          width={640}
          height={640}
          className="aspect-square w-full object-cover transition-transform duration-300"
          style={{ transformOrigin: origin, transform: zoom ? "scale(1.7)" : "scale(1)" }}
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={`${img}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "size-16 overflow-hidden rounded-xl ring-1 transition sm:size-20",
                i === active ? "ring-2 ring-brand" : "ring-ink/10 hover:ring-brand/40",
              )}
            >
              <img src={img} alt="" loading="lazy" className="size-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
