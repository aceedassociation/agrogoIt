"use client";

import { Languages } from "lucide-react";
import { localeConfig, type Locale } from "@/lib/i18n";
import { useLanguage } from "@/components/language-provider";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  return <label className="language-switcher"><Languages aria-hidden="true" /><span className="sr-only">{t("language.label", "Language")}</span><select value={locale} onChange={(event) => setLocale(event.target.value as Locale)} aria-label={t("language.label", "Language")}>{(Object.keys(localeConfig) as Locale[]).filter((key) => localeConfig[key].enabled).map((key) => <option value={key} key={key}>{localeConfig[key].label}</option>)}</select></label>;
}
