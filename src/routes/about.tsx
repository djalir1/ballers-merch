import { createFileRoute, Link } from "@tanstack/react-router";
import { BasketballBg, Ball } from "@/components/BasketballBg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ballers Merch — Basketball Streetwear Brand" },
      {
        name: "description",
        content:
          "Ballers Merch is a basketball-inspired streetwear brand built for people who love the game, the culture and the lifestyle.",
      },
      { property: "og:title", content: "About Ballers Merch" },
      {
        property: "og:description",
        content:
          "A basketball-inspired streetwear brand bringing court energy into everyday style.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <BasketballBg />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
          <Ball className="mx-auto h-20 w-20 animate-spin-slow" />
          <h1 className="mt-6 font-display text-5xl tracking-[0.04em] sm:text-6xl">
            ABOUT BALLERS MERCH
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Ballers Merch is a basketball-inspired streetwear brand created
            for people who love the game, the culture, and the lifestyle. From
            the court to the streets, we bring basketball energy into everyday
            style.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-3">
        {[
          {
            t: "PLAYER-FIRST",
            d: "Every fit is tested on the court before it hits the shelf.",
          },
          {
            t: "PREMIUM FABRICS",
            d: "Heavyweight cotton, brushed fleece and breathable mesh only.",
          },
          {
            t: "LOCAL & FAST",
            d: "Kigali based. Order today, we deliver and confirm by phone.",
          },
        ].map((c) => (
          <div
            key={c.t}
            className="rounded-2xl border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-1.5"
          >
            <h2 className="font-display text-xl tracking-[0.12em] text-accent">
              {c.t}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 text-center">
        <Link to="/shop" className="btn-baller inline-flex text-base">
          SHOP THE COLLECTION
        </Link>
      </section>
    </>
  );
}
