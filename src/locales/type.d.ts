export type Locale = {
  locale: LocaleLang;
  language: string;
};

export type LocaleLang = "en" | "ja" | "ct" | "cs";

export type LocaleData = {
  en: string;
  ja: string;
  cs: string;
  ct: string;
};

export type Languages = {
  en: Language;
  ja: Language;
  cs: Language;
  ct: Language;
};

export type Language = {
  locale: string;
  hello: string;
  hello_name: string;
  hero_list: {
    manner: Hero;
    clean: Hero;
    eco: Hero;
  };
};

type Hero = {
  title: string;
};
