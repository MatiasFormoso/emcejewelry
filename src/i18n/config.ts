// src/i18n/config.ts
export type Dict = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    catalog: string;
    collections: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    features: {
      quality: string;
      craftsmanship: string;
      elegance: string;
    };
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
  catalog: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      rings: string;
      necklaces: string;
      earrings: string;
      bracelets: string;
    };
  };
  favorites: {
    title: string;
    subtitle: string;
  };
  collections: {
    title: string;
    subtitle: string;
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
