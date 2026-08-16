import { createFileRoute } from "@tanstack/react-router";
import { Copy, Phone, MessageCircle, Instagram } from "lucide-react";
import { toast } from "sonner";
import { BasketballBg } from "@/components/BasketballBg";
import { site } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Orders — Ballers Merch" },
      {
        name: "description",
        content:
          "Order Ballers Merch by Mobile Money, call or WhatsApp on 0788980607. Fast confirmation, Kigali based.",
      },
      { property: "og:title", content: "Contact Ballers Merch" },
      {
        property: "og:description",
        content: "Call, WhatsApp or send Mobile Money to 0788980607 to order.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.phone);
      toast.success("Number copied", { description: site.phone });
    } catch {
      toast.error("Copy failed — please dial it manually");
    }
  };

  return (
    <section className="relative overflow-hidden">
      <BasketballBg dense />
      <div className="relative mx-auto max-w-3xl px-5 py-24">
        <div className="text-center">
          <p className="label-xs text-accent">GET IN TOUCH</p>
          <h1 className="mt-2 font-display text-5xl tracking-[0.04em] sm:text-6xl">
            READY TO ORDER?
          </h1>
          <p className="mt-4 text-muted-foreground">
            Mobile Money, call or WhatsApp — we confirm every order personally.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-accent/50 bg-accent/10 p-8 text-center">
          <p className="label-xs">MOBILE MONEY / CALL</p>
          <p className="mt-3 font-display text-4xl tracking-[0.08em] text-accent sm:text-6xl">
            {site.phone}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Send your payment to <strong>{site.phone}</strong>. After payment,
            contact us with your payment confirmation and order details.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button onClick={copy} className="btn-outline">
            <Copy className="h-4 w-4" /> COPY NUMBER
          </button>
          <a href={`tel:${site.phone}`} className="btn-baller">
            <Phone className="h-4 w-4" /> CALL NOW
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <MessageCircle className="h-4 w-4" /> WHATSAPP US
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <Instagram className="h-4 w-4" /> INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  );
}
