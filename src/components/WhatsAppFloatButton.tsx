import { customRequestWhatsappLink } from "../data";

export default function WhatsAppFloatButton() {
  return (
    <a
      className="whatsapp-float"
      href={customRequestWhatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Não achou o que queria? Peça algo personalizado no WhatsApp"
    >
      <span className="whatsapp-float__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
          <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5-.17 0-.36-.02-.56-.02-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.19 3.03.15.19 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
          <path d="M12.02 2C6.5 2 2.03 6.48 2.03 12c0 1.87.5 3.63 1.44 5.15L2 22l4.98-1.4A9.95 9.95 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1c-1.68 0-3.24-.5-4.55-1.36l-.33-.2-3.02.85.84-2.95-.22-.34a8.08 8.08 0 0 1-1.24-4.1c0-4.47 3.64-8.1 8.12-8.1 4.47 0 8.11 3.63 8.11 8.1 0 4.47-3.64 8.1-8.11 8.1Z" />
        </svg>
      </span>
      <span className="whatsapp-float__text">
        Não achou o que queria?
        <strong>Peça algo personalizado</strong>
      </span>
    </a>
  );
}
