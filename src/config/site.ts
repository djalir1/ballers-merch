/**
 * Central brand + contact configuration.
 * Change the phone number here and it updates everywhere on the site.
 */
export const site = {
  name: "Ballers Merch",
  tagline: "BUILT FOR THE BALLERS.",
  description:
    "Basketball-inspired streetwear made for players, fans, and everyone who lives the game.",
  phone: "0788980607",
  /** International format used for WhatsApp deep links (Rwanda +250). */
  whatsapp: "250788980607",
  instagram: "https://instagram.com",
  currency: "RWF",
} as const;

export const formatPrice = (amount: number) =>
  `${amount.toLocaleString("en-US")} ${site.currency}`;
