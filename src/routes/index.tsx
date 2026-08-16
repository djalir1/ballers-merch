import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { BasketballBg, Ball } from "@/components/BasketballBg";
import { FeaturedGrid, ProductGrid } from "@/components/ProductGrid";
import { site } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ballers Merch — Basketball Streetwear in Rwanda" },
      {
        name: "description",
        content:
          "Basketball-inspired streetwear: tees, jerseys, hoodies, caps and more. Order via Mobile Money on 0788980607.",
      },
      { property: "og:title", content: "Ballers Merch — Built For The Ballers" },
      {
        property: "og:description",
        content:
          "Premium basketball streetwear made for players, fans, and everyone who lives the game.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Basketball resting on a floodlit night court"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <BasketballBg dense />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-24">
          <p className="animate-rise font-display text-sm tracking-[0.4em] text-accent">
            {site.name}
          </p>
          <h1
            className="animate-rise mt-4 font-display text-6xl leading-[0.88] tracking-[0.02em] sm:text-8xl lg:text-9xl"
            style={{ animationDelay: "80ms" }}
          >
            BUILT FOR
            <br />
            THE <span className="text-accent">BALLERS.</span>
          </h1>
          <p
            className="animate-rise mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {site.description}
          </p>
          <div
            className="animate-rise mt-9 flex flex-wrap gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Link to="/shop" className="btn-baller group text-base">
              SHOP NOW
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={`tel:${site.phone}`} className="btn-outline text-base">
              AVAILABLE
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 animate-roll-in opacity-20 sm:h-80 sm:w-80">
          <Ball className="h-full w-full animate-spin-slow" />
        </div>
      </section>

      <section className="court-divider" />

      <section id="shop" className="mx-auto max-w-7xl px-5 py-20">
        <SectionHead
          kicker="THE COLLECTION"
          title="SHOP THE DROP"
          sub="Court-ready gear, street-ready fits."
        />
        <ProductGrid />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-[auto_1fr] md:p-14">
          <Ball className="h-28 w-28 animate-spin-slow md:h-40 md:w-40" />
          <div>
            <p className="label-xs text-accent">ABOUT BALLERS MERCH</p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.04em] md:text-5xl">
              FROM THE COURT
              <br />
              TO THE STREETS.
            </h2>
            <p className="mt-5 max-w-2xl text-muted-foreground">
              Ballers Merch is a basketball-inspired streetwear brand created
              for people who love the game, the culture, and the lifestyle. From
              the court to the streets, we bring basketball energy into everyday
              style.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-border bg-secondary/40">
        <BasketballBg />
        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center">
          <h2 className="font-display text-5xl leading-[0.9] tracking-[0.03em] sm:text-7xl">
            REP THE GAME.
            <br />
            <span className="text-accent">WEAR THE CULTURE.</span>
          </h2>
          <Link to="/shop" className="btn-baller mt-9 inline-flex text-base">
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>
    </>
  );
}

export function SectionHead({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-10 text-center">
      <p className="label-xs text-accent">{kicker}</p>
      <h2 className="mt-2 font-display text-4xl tracking-[0.04em] sm:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}
