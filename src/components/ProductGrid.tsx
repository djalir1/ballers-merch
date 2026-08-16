import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { OrderDialog } from "@/components/OrderDialog";
import { categories, products, type Product } from "@/data/products";

export function ProductGrid({ withFilters = true }: { withFilters?: boolean }) {
  const [active, setActive] = useState<(typeof categories)[number]>("ALL");
  const [selected, setSelected] = useState<Product | null>(null);

  const list =
    active === "ALL" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {withFilters && (
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-2 font-display text-xs tracking-[0.2em] transition-all duration-200 ${
                active === c
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:-translate-y-0.5 hover:border-accent/60 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} onSelect={setSelected} />
        ))}
      </div>

      <OrderDialog
        product={selected}
        onOpenChange={(o) => !o && setSelected(null)}
      />
    </>
  );
}

export function FeaturedGrid() {
  const [selected, setSelected] = useState<Product | null>(null);
  const featured = products.filter((p) => p.featured);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} onSelect={setSelected} />
        ))}
      </div>
      <OrderDialog
        product={selected}
        onOpenChange={(o) => !o && setSelected(null)}
      />
    </>
  );
}
