import { formatPrice } from "@/config/site";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  index = 0,
  onSelect,
}: {
  product: Product;
  index?: number;
  onSelect: (p: Product) => void;
}) {
  return (
    <article
      className="group animate-rise overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-[0_24px_60px_-24px_var(--accent-glow)]"
      style={{ animationDelay: `${Math.min(index, 8) * 70}ms` }}
    >
      <button
        onClick={() => onSelect(product)}
        aria-label={`View ${product.name}`}
        className="block w-full overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </button>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 font-display text-lg leading-tight tracking-[0.06em]">
            {product.name}
          </h3>
          <span className="shrink-0 font-display text-lg text-accent">
            {formatPrice(product.price)}
          </span>
        </div>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <span
              key={s}
              className="rounded border border-border px-2 py-0.5 text-[11px] tracking-widest text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <button
          onClick={() => onSelect(product)}
          className="btn-baller w-full"
        >
          BUY NOW
        </button>
      </div>
    </article>
  );
}
