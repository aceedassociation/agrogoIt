"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, localeConfig, type Locale } from "@/lib/i18n";

const storageKey = "agrogo-site-locale";

const translations: Record<Exclude<Locale, "en">, Record<string, string>> = {
  fr: {
    "language.label": "Langue",
    "nav.home": "Accueil", "nav.consulting": "Conseil", "nav.solutions": "Solutions", "nav.packages": "Offres", "nav.methodology": "Méthodologie", "nav.demonstrators": "Démonstrateurs", "nav.about": "À propos", "nav.contact": "Contact",
    "cta.diagnostic": "Réserver un diagnostic digital", "cta.discuss": "Parler de votre projet", "cta.exploreSolutions": "Découvrir nos solutions",
    "footer.company": "Entreprise", "footer.solutions": "Solutions", "footer.start": "Démarrer une conversation", "footer.description": "Définissez le problème, l'écart opérationnel et la prochaine étape pertinente.", "footer.brand": "Clarté métier, transformation maîtrisée et livraison digitale concrète.", "footer.project": "Parler de votre projet", "footer.privacy": "Politique de confidentialité", "footer.terms": "Conditions d’utilisation", "footer.cookies": "Préférences cookies", "footer.rights": "Tous droits réservés.",
    "cookie.title": "Votre vie privée, votre choix", "cookie.text": "Nous utilisons uniquement les technologies essentielles au fonctionnement du site. Aucun cookie d’analyse ou de publicité n’est activé sans votre accord.", "cookie.link": "Lire notre avis sur les cookies", "cookie.essential": "Essentiels uniquement", "cookie.accept": "Accepter et continuer",
    "hero.eyebrow": "Transformation digitale & solutions logicielles", "hero.title.1": "Transformer un travail fragmenté en", "hero.title.2": "systèmes digitaux utiles.", "hero.lead": "Agrogo associe conseil, gestion de projet et livraison logicielle pour créer des plateformes web, mobiles et de gestion qui fonctionnent dans les opérations réelles.", "hero.capabilities": "Conseil · Gestion de projet · Livraison logicielle · Formation · Support",
    "home.consulting.label": "Conseil", "home.consulting.title": "Commencez par l’écart opérationnel, pas par l’outil.", "home.consulting.text": "Nous auditons le fonctionnement actuel, évaluons la gouvernance et la maturité digitale, puis concevons le chemin le plus crédible vers le modèle opérationnel visé.", "home.consulting.action": "Découvrir le conseil IT",
    "home.solutions.label": "Solutions", "home.solutions.title": "Ce que nous construisons", "home.solutions.text": "Des systèmes concrets façonnés autour des flux, utilisateurs et décisions qui comptent pour votre organisation.",
    "about.location.label": "Où nous intervenons", "about.location.title": "Racines à Casablanca. Présence au Royaume-Uni. Livraison en Europe.", "about.location.text": "Notre bureau au Maroc est situé au 101 Najma, Casablanca. Nous disposons également d’une branche à Londres pour une communication plus proche avec les clients britanniques et européens.",
    "form.fullName": "Nom complet", "form.company": "Entreprise ou organisation", "form.jobTitle": "Fonction", "form.email": "E-mail professionnel", "form.phone": "Numéro de téléphone", "form.country": "Pays", "form.project": "Type de projet", "form.timeline": "Délai souhaité", "form.challenge": "Défi métier actuel", "form.existing": "Outils ou systèmes existants", "form.budget": "Fourchette budgétaire estimée", "form.additional": "Informations complémentaires", "form.selectProject": "Sélectionnez un type de projet", "form.selectTimeline": "Sélectionnez un délai", "form.send": "Envoyer votre demande", "form.sending": "Envoi de votre demande…", "form.privacy": "J’accepte qu’Agrogo utilise ces informations comme indiqué dans la", "form.terms": "J’ai lu et j’accepte les", "form.success": "Merci. Votre demande a bien été reçue.",
    "whatsapp": "Nous écrire sur WhatsApp",
  },
  ar: {
    "language.label": "اللغة",
    "nav.home": "الرئيسية", "nav.consulting": "الاستشارات", "nav.solutions": "الحلول", "nav.packages": "الباقات", "nav.methodology": "المنهجية", "nav.demonstrators": "نماذج العرض", "nav.about": "من نحن", "nav.contact": "تواصل معنا",
    "cta.diagnostic": "احجز تشخيصاً رقمياً", "cta.discuss": "ناقش مشروعك", "cta.exploreSolutions": "اكتشف حلولنا",
    "footer.company": "الشركة", "footer.solutions": "الحلول", "footer.start": "ابدأ محادثة", "footer.description": "حدّد المشكلة والفجوة التشغيلية والخطوة المناسبة التالية.", "footer.brand": "وضوح في الأعمال، تحول مضبوط، وتنفيذ رقمي عملي.", "footer.project": "ناقش مشروعك", "footer.privacy": "سياسة الخصوصية", "footer.terms": "شروط الاستخدام", "footer.cookies": "إعدادات ملفات الارتباط", "footer.rights": "جميع الحقوق محفوظة.",
    "cookie.title": "خصوصيتك، اختيارك", "cookie.text": "نستخدم التقنيات الأساسية فقط لتشغيل هذا الموقع. لا نفعّل ملفات تحليلية أو إعلانية دون موافقتك.", "cookie.link": "اطّلع على إشعار ملفات الارتباط", "cookie.essential": "الأساسية فقط", "cookie.accept": "موافقة ومتابعة",
    "hero.eyebrow": "التحول الرقمي والحلول البرمجية", "hero.title.1": "حوّل العمل المتشتت إلى", "hero.title.2": "أنظمة رقمية مفيدة.", "hero.lead": "تجمع Agrogo بين الاستشارات وإدارة المشاريع والتسليم البرمجي لبناء منصات ويب وتطبيقات وأنظمة إدارة تعمل في العمليات الحقيقية.", "hero.capabilities": "استشارات · إدارة المشاريع · تسليم برمجي · تدريب · دعم",
    "home.consulting.label": "الاستشارات", "home.consulting.title": "ابدأ بالفجوة التشغيلية، لا بالأداة.", "home.consulting.text": "نراجع طريقة عمل المؤسسة اليوم، ونقيّم الحوكمة والنضج الرقمي، ثم نصمم المسار العملي نحو نموذج التشغيل الذي تريد الوصول إليه.", "home.consulting.action": "اكتشف استشارات تقنية المعلومات",
    "home.solutions.label": "الحلول", "home.solutions.title": "ما الذي نبنيه", "home.solutions.text": "أنظمة عملية مصممة حول سير العمل والمستخدمين والقرارات المهمة لمؤسستك.",
    "about.location.label": "أماكن عملنا", "about.location.title": "جذور في الدار البيضاء. حضور في المملكة المتحدة. تنفيذ في أوروبا.", "about.location.text": "يقع مكتبنا في المغرب في 101 نجمة، الدار البيضاء. ولدينا أيضاً فرع في لندن للتواصل بشكل أقرب مع العملاء في المملكة المتحدة وأوروبا.",
    "form.fullName": "الاسم الكامل", "form.company": "الشركة أو المؤسسة", "form.jobTitle": "المسمى الوظيفي", "form.email": "البريد المهني", "form.phone": "رقم الهاتف", "form.country": "الدولة", "form.project": "نوع المشروع", "form.timeline": "المدة المطلوبة", "form.challenge": "التحدي التشغيلي الحالي", "form.existing": "الأدوات أو الأنظمة الحالية", "form.budget": "النطاق التقديري للميزانية", "form.additional": "معلومات إضافية", "form.selectProject": "اختر نوع المشروع", "form.selectTimeline": "اختر المدة", "form.send": "أرسل تفاصيل مشروعك", "form.sending": "جارٍ إرسال تفاصيل مشروعك…", "form.privacy": "أوافق على استخدام Agrogo لهذه المعلومات كما هو موضح في", "form.terms": "قرأت وأوافق على", "form.success": "شكراً. تم استلام طلبك بنجاح.",
    "whatsapp": "راسلنا عبر واتساب",
  },
};

type LanguageContextValue = { locale: Locale; setLocale: (locale: Locale) => void; t: (key: string, fallback: string) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey) as Locale | null;
    if (saved && localeConfig[saved]?.enabled) setLocaleState(saved);
  }, []);
  useEffect(() => {
    const settings = localeConfig[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = settings.dir;
    document.documentElement.dataset.locale = locale;
  }, [locale]);
  const value = useMemo<LanguageContextValue>(() => ({
    locale,
    setLocale: (next) => { window.localStorage.setItem(storageKey, next); setLocaleState(next); },
    t: (key, fallback) => locale === "en" ? fallback : translations[locale][key] ?? fallback,
  }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function LocaleText({ id, children }: { id: string; children: string }) {
  const { t } = useLanguage();
  return <>{t(id, children)}</>;
}
