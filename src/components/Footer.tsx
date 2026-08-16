import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { Ball } from "@/components/BasketballBg";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Ball className="h-7 w-7 animate-spin-slow" />
            <span className="font-display text-xl tracking-[0.18em]">
              {site.name}
            </span>
          </div>
          <p className="mt-3 font-display text-sm tracking-[0.25em] text-accent">
            {site.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-[0.25em] text-muted-foreground">
            EXPLORE
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/shop", label: "Shop" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-[0.25em] text-muted-foreground">
            CONTACT
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-2 text-foreground transition-colors hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" /> {site.phone}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
            >
              <MessageCircle className="h-4 w-4 text-accent" /> WhatsApp
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-accent"
            >
              <Instagram className="h-4 w-4 text-accent" /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-5 py-5 text-center text-xs tracking-wider text-muted-foreground">
        © {new Date().getFullYear()} {site.name} — Kigali, Rwanda
      </div>
    </footer>
  );
}
