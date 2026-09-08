"use client";

import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/components/language-provider";

export function WhatsAppButton() {
  const { t } = useLanguage();
  const phone = siteConfig.whatsapp.replace(/\D/g, "");

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      aria-label={t("whatsapp", "Start a WhatsApp conversation with Agrogo IT Services")}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M27.1 4.8A15.4 15.4 0 0 0 16.1.3C7.6.3.7 7.2.7 15.7c0 2.7.7 5.4 2.1 7.7L.5 31.7l8.5-2.2a15.3 15.3 0 0 0 7.1 1.8h.1c8.5 0 15.4-6.9 15.4-15.4 0-4.1-1.6-8-4.5-11.1ZM16.2 28.7a12.8 12.8 0 0 1-6.5-1.8l-.5-.3-5 1.3 1.3-4.9-.3-.5A12.8 12.8 0 0 1 3.4 16C3.4 8.9 9.1 3.2 16.2 3.2c3.4 0 6.7 1.3 9.1 3.8a12.8 12.8 0 0 1 3.7 9.1c0 7-5.8 12.7-12.8 12.7Zm7-9.5c-.4-.2-2.5-1.2-2.9-1.4-.4-.1-.7-.2-1 .2-.3.4-1.1 1.4-1.4 1.7-.2.3-.5.3-.9.1-2.6-1.3-4.4-2.4-6.1-5.5-.2-.4 0-.6.2-.8l.7-.8c.2-.2.3-.4.4-.7.1-.2 0-.5 0-.7l-1.4-3.3c-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.5 0 2 1.5 4 1.7 4.3.2.3 3 4.6 7.2 6.5 1 .4 1.8.7 2.4.9 1 .3 1.9.3 2.6.2.8-.1 2.5-1 2.8-2 .3-1 .3-1.9.2-2.1-.1-.2-.4-.3-.8-.5Z" />
      </svg>
      <span>{t("whatsapp", "WhatsApp us")}</span>
    </a>
  );
}
