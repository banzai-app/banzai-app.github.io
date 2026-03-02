export const WHATSAPP_NUMBER = "14155238886";

export const buildWhatsAppLink = (message?: string) => {
  if (!WHATSAPP_NUMBER) {
    return "";
  }

  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message)}`;
};
