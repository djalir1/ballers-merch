import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { site } from "@/config/site";
import { Ball } from "@/components/BasketballBg";

const links = [
  { to: "/", label: "HOME" },
  { to: "/shop", label: "SHOP" },
  { to: "/about", label: "ABOUT" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:flex md:justify-between">
        <Link to="/" className="group flex min-w-0 items-center gap-2.5">
          <Ball className="h-7 w-7 shrink-0 transition-transform duration-500 group-hover:rotate-180" />
          <span className="truncate font-display text-xl tracking-[0.18em] text-foreground">
            {site.name}
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="link-underline font-display text-sm tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phone}`}
            aria-label="Order by phone"
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-display text-sm tracking-[0.16em] text-accent-foreground transition-transform duration-200 hover:scale-105"
          >
            <ShoppingBag className="h-4 w-4" /> ORDER
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="shrink-0 rounded-md border border-border p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="border-b border-border/60 py-3 font-display text-base tracking-[0.2em] text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phone}`}
              className="mt-4 rounded-full bg-accent py-3 text-center font-display tracking-[0.16em] text-accent-foreground"
            >
              CALL {site.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
