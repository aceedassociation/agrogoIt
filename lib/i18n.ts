export const defaultLocale = "en" as const;
export const localeConfig = {
  en: { label: "English", dir: "ltr" as const, enabled: true },
  fr: { label: "Français", dir: "ltr" as const, enabled: true },
  ar: { label: "العربية", dir: "rtl" as const, enabled: true },
};
export type Locale = keyof typeof localeConfig;
