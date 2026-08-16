import { useEffect, useState } from "react";
import { Copy, Phone, MessageCircle, Check, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatPrice, site } from "@/config/site";
import type { Product } from "@/data/products";

type Step = "detail" | "pay";

export function OrderDialog({
  product,
  onOpenChange,
}: {
  product: Product | null;
  onOpenChange: (open: boolean) => void;
}) {
  const [step, setStep] = useState<Step>("detail");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (product) {
      setStep("detail");
      setSize(product.sizes[0] ?? "");
      setQty(1);
      setCopied(false);
    }
  }, [product]);

  if (!product) return null;

  const total = product.price * qty;
  const orderText = `Hello Ballers Merch! I want to order:%0A- ${product.name}%0A- Size: ${size}%0A- Quantity: ${qty}%0A- Total: ${formatPrice(total)}%0A- Name: ${name || "-"}%0A- Phone: ${phone || "-"}`;

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(site.phone);
      setCopied(true);
      toast.success("Number copied", { description: site.phone });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Copy failed — please dial it manually");
    }
  };

  return (
    <Dialog open={!!product} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] gap-0 overflow-y-auto border-border bg-card p-0 sm:max-w-3xl">
        {step === "detail" ? (
          <div className="grid md:grid-cols-2">
            <div className="bg-secondary">
              <img
                src={product.image}
                alt={product.name}
                width={800}
                height={800}
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            <div className="space-y-5 p-6">
              <DialogHeader className="space-y-2 text-left">
                <DialogTitle className="font-display text-2xl tracking-[0.06em]">
                  {product.name}
                </DialogTitle>
                <p className="font-display text-2xl text-accent">
                  {formatPrice(product.price)}
                </p>
              </DialogHeader>

              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>

              <div>
                <p className="label-xs">SIZE</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`rounded-md border px-3 py-1.5 text-xs tracking-widest transition-colors ${
                        size === s
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border text-muted-foreground hover:border-accent/60"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="label-xs">QUANTITY</p>
                <div className="mt-2 flex w-fit items-center gap-1 rounded-md border border-border">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="px-3 py-2 text-muted-foreground hover:text-accent"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-display">{qty}</span>
                  <button
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => Math.min(20, q + 1))}
                    className="px-3 py-2 text-muted-foreground hover:text-accent"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="label-xs" htmlFor="ord-name">
                    YOUR NAME
                  </label>
                  <input
                    id="ord-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    className="field mt-2"
                  />
                </div>
                <div>
                  <label className="label-xs" htmlFor="ord-phone">
                    YOUR PHONE
                  </label>
                  <input
                    id="ord-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    inputMode="tel"
                    placeholder="07xx xxx xxx"
                    className="field mt-2"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background p-4 text-sm">
                <p className="label-xs mb-2">ORDER SUMMARY</p>
                <p className="font-display text-base">{product.name}</p>
                <p className="text-muted-foreground">Size: {size}</p>
                <p className="text-muted-foreground">Quantity: {qty}</p>
                <p className="mt-1 font-display text-lg text-accent">
                  Total: {formatPrice(total)}
                </p>
              </div>

              <button onClick={() => setStep("pay")} className="btn-baller w-full">
                ORDER NOW
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5 p-7">
            <DialogHeader className="text-left">
              <DialogTitle className="font-display text-3xl tracking-[0.08em]">
                READY TO ORDER?
              </DialogTitle>
            </DialogHeader>

            <div className="rounded-xl border border-border bg-background p-4 text-sm">
              <p className="font-display text-base">{product.name}</p>
              <p className="text-muted-foreground">
                Size: {size} · Quantity: {qty}
              </p>
              <p className="mt-1 font-display text-lg text-accent">
                Total: {formatPrice(total)}
              </p>
            </div>

            <div className="rounded-2xl border border-accent/50 bg-accent/10 p-6 text-center">
              <p className="label-xs">MOBILE MONEY / CALL</p>
              <p className="mt-2 font-display text-4xl tracking-[0.08em] text-accent sm:text-5xl">
                {site.phone}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Send your payment to <strong>{site.phone}</strong>
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button onClick={copyNumber} className="btn-outline">
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "COPIED" : "COPY NUMBER"}
              </button>
              <a href={`tel:${site.phone}`} className="btn-baller">
                <Phone className="h-4 w-4" /> CALL NOW
              </a>
            </div>

            <a
              href={`https://wa.me/${site.whatsapp}?text=${orderText}`}
              target="_blank"
              rel="noreferrer"
              className="btn-outline w-full"
            >
              <MessageCircle className="h-4 w-4" /> SEND ORDER ON WHATSAPP
            </a>

            <p className="text-center text-sm text-muted-foreground">
              After payment, contact us with your payment confirmation and order
              details.
            </p>

            <button
              onClick={() => setStep("detail")}
              className="w-full text-center text-xs tracking-[0.2em] text-muted-foreground hover:text-accent"
            >
              ← BACK TO ORDER
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
