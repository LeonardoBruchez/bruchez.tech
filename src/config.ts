// Configurações centrais do site — edite aqui para atualizar em todo o site.
export const SITE = {
  brand: "bruchez",
  brandSuffix: ".tech",
  whatsappNumber: "554898301531",
  instagram: "https://instagram.com/bruchez.tech",
  facebook: "https://facebook.com/share/1HJsMWy481/",
  tiktok: "https://tiktok.com/@leobruchez",
  city: "Florianópolis / São José — SC",
};

export function waLink(message: string) {
  const encodedMessage = encodeURIComponent(message).replace(/!/g, "%21");
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodedMessage}`;
}

export function productWhatsAppLink(productName: string) {
  return waLink(`Olá! Vim direto do site da bruchez.tech e tenho interesse na peça: ${productName}.`);
}

export const DEFAULT_WA_MESSAGE = "Olá! Vi o site da bruchez.tech e quero saber mais sobre impressão 3D 🙂";
