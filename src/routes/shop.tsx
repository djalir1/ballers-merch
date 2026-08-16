import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/ProductGrid";
import { BasketballBg } from "@/components/BasketballBg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Basketball Merch — Ballers Merch" },
      {
        name: "description",
        content:
          "Browse Ballers Merch tees, jerseys, hoodies, caps, shorts and bags. Prices in RWF, order on 0788980607.",
      },
      { property: "og:title", content: "Shop Basketball Merch — Ballers Merch" },
      {
        property: "og:description",
        content:
          "Tees, jerseys, hoodies, caps and accessories built for the ballers.",
      },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <BasketballBg />
        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center">
          <p className="label-xs text-accent">THE COLLECTION</p>
          <h1 className="mt-2 font-display text-5xl tracking-[0.04em] sm:text-7xl">
            SHOP ALL
          </h1>
          <p className="mt-3 text-muted-foreground">
            Pick your piece, tap BUY NOW, pay by Mobile Money.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <ProductGrid />
      </section>
    </>
  );
}
