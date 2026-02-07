export const translations = {
  az: {
    nav: {
      services: "Xidmətlər",
      standards: "Standartlar",
      industries: "Sahələr",
      insights: "Ekspertiza",
      faq: "FAQ",
      about: "Şirkət haqqında",
      contact: "Əlaqə",
      cta: "Təklif alın"
    },
    footer: {
      aboutTitle: "QualifyCert",
      aboutText:
        "ISO sertifikatlaşdırma, audit və personal təlimi. Diaqnostika → plan → tətbiq → daxili audit → sertifikatlaşmaya hazırlıq.",
      sectionsTitle: "Bölmələr",
      insightsTitle: "Ekspertiza",
      documentsTitle: "Sənədlər",
      blog: "Bloq",
      cases: "Keys",
      privacy: "Məxfilik siyasəti",
      cookies: "Cookies",
      rights: "Bütün hüquqlar qorunur."
    },
    switcher: {
      label: "Dil"
    }
  },
  ru: {
    nav: {
      services: "Услуги",
      standards: "Стандарты",
      industries: "Отрасли",
      insights: "Экспертиза",
      faq: "FAQ",
      about: "О компании",
      contact: "Контакты",
      cta: "Получить предложение"
    },
    footer: {
      aboutTitle: "QualifyCert",
      aboutText:
        "Сертификация ISO, аудит и обучение персонала. Диагностика → план → внедрение → внутренний аудит → готовность к сертификации.",
      sectionsTitle: "Разделы",
      insightsTitle: "Экспертиза",
      documentsTitle: "Документы",
      blog: "Блог",
      cases: "Кейсы",
      privacy: "Политика конфиденциальности",
      cookies: "Cookies",
      rights: "Все права защищены."
    },
    switcher: {
      label: "Язык"
    }
  },
  en: {
    nav: {
      services: "Services",
      standards: "Standards",
      industries: "Industries",
      insights: "Insights",
      faq: "FAQ",
      about: "About",
      contact: "Contact",
      cta: "Get a quote"
    },
    footer: {
      aboutTitle: "QualifyCert",
      aboutText:
        "ISO certification, audits, and staff training. Diagnostics → plan → implementation → internal audit → readiness for certification.",
      sectionsTitle: "Sections",
      insightsTitle: "Insights",
      documentsTitle: "Documents",
      blog: "Blog",
      cases: "Cases",
      privacy: "Privacy Policy",
      cookies: "Cookies",
      rights: "All rights reserved."
    },
    switcher: {
      label: "Language"
    }
  }
} as const;

export type Lang = keyof typeof translations;
