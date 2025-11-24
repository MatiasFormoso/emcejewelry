// src/i18n/config.ts
export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  philosophy: {
    title: string;
    subtitle: string;
    description: string;
  };
  story: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    cta: string;
  };
  atelier: {
    title: string;
    subtitle: string;
    cta: string;
  };
  instagram: {
    title: string;
    subtitle: string;
  };
  featuredCollections: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    followUs: string;
    rights: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };
  aboutUs: {
    title: string;
    subtitle: string;
    mission: {
      title: string;
      description: string;
    };
    vision: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      items: string[];
    };
    note: string;
  };
};

export type Locale = "es" | "en";

export async function getDictionary(locale: Locale) {
  switch (locale) {
    case "en":
      return (await import("./dictionaries/en")).default as Dict;
    case "es":
    default:
      return (await import("./dictionaries/es")).default as Dict;
  }
}
