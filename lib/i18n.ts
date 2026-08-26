export const defaultLocale = "en" as const;
export const localeConfig = {
  en: { label: "English", dir: "ltr" as const, enabled: true },
  fr: { label: "Français", dir: "ltr" as const, enabled: false },
  ar: { label: "العربية", dir: "rtl" as const, enabled: false },
};
export type Locale = keyof typeof localeConfig;
