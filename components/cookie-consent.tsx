"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";

const storageKey = "agrogo-cookie-choice";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setVisible(!window.localStorage.getItem(storageKey));
  }, []);

  function save(choice: "essential" | "all") {
    window.localStorage.setItem(storageKey, choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside className="cookie-consent" role="dialog" aria-label={t("footer.cookies", "Cookie preferences")} aria-live="polite">
      <div>
        <strong>{t("cookie.title", "Your privacy, your choice")}</strong>
        <p>{t("cookie.text", "We use essential technology to make this website work. We do not activate optional analytics or advertising cookies without your permission.")}</p>
        <Link href="/privacy#cookies">{t("cookie.link", "Read our cookie notice")}</Link>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-essential" onClick={() => save("essential")}>{t("cookie.essential", "Essential only")}</button>
        <button type="button" className="cookie-accept" onClick={() => save("all")}>{t("cookie.accept", "Accept & continue")}</button>
      </div>
    </aside>
  );
}
