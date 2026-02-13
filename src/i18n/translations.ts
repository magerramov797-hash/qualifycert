export const translations = {
  az: {
    nav: {
      services: "Xidmətlər",
      standards: "Standartlar",
      industries: "Sahələr",
      blog: "Bloq",
      faq: "FAQ",
      about: "Şirkət haqqında",
      contact: "Əlaqə",
      cta: "Təklif alın",

      // ✅ dropdown subpages
      servicesSub: {
        certification: "ISO sertifikatlaşdırma",
        audit: "Audit",
        training: "Təlim",
      },
      industriesSub: {
        all: "Bütün sahələr",
      },
    },
    footer: {
      aboutTitle: "QualifyCert",
      aboutText:
        "ISO sertifikatlaşdırma, audit və personal təlimi. Diaqnostika → plan → tətbiq → daxili audit → sertifikatlaşmaya hazırlıq.",
      sectionsTitle: "Bölmələr",
      documentsTitle: "Sənədlər",
      privacy: "Məxfilik siyasəti",
      cookies: "Cookies",
      rights: "Bütün hüquqlar qorunur.",
    },
    switcher: {
      label: "Dil",
    },
  },

  ru: {
    nav: {
      services: "Услуги",
      standards: "Стандарты",
      industries: "Отрасли",
      blog: "Блог",
      faq: "FAQ",
      about: "О компании",
      contact: "Контакты",
      cta: "Получить предложение",

      // ✅ dropdown subpages
      servicesSub: {
        certification: "Сертификация ISO",
        audit: "Аудит",
        training: "Обучение",
      },
      industriesSub: {
        all: "Все отрасли",
      },
    },
    footer: {
      aboutTitle: "QualifyCert",
      aboutText:
        "Сертификация ISO, аудит и обучение персонала. Диагностика → план → внедрение → внутренний аудит → готовность к сертификации.",
      sectionsTitle: "Разделы",
      documentsTitle: "Документы",
      privacy: "Политика конфиденциальности",
      cookies: "Cookies",
      rights: "Все права защищены.",
    },
    switcher: {
      label: "Язык",
    },
  },

  en: {
    nav: {
      services: "Services",
      standards: "Standards",
      industries: "Industries",
      blog: "Blog",
      faq: "FAQ",
      about: "About",
      contact: "Contact",
      cta: "Get a quote",

      // ✅ dropdown subpages
      servicesSub: {
        certification: "ISO Certification",
        audit: "Audit",
        training: "Training",
      },
      industriesSub: {
        all: "All industries",
      },
    },
    footer: {
      aboutTitle: "QualifyCert",
      aboutText:
        "ISO certification, audits, and staff training. Diagnostics → plan → implementation → internal audit → readiness for certification.",
      sectionsTitle: "Sections",
      documentsTitle: "Documents",
      privacy: "Privacy Policy",
      cookies: "Cookies",
      rights: "All rights reserved.",
    },
    switcher: {
      label: "Language",
    },
  },
} as const;

export type Lang = keyof typeof translations;
