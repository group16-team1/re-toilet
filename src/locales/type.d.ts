export type Locale = {
  locale: LocaleLang;
  language: string;
};

export type LocaleLang = "en" | "ja" | "cn";

export type LocaleData = {
  en: string;
  ja: string;
  cn: string;
};

export type Languages = {
  en: Language;
  ja: Language;
  cn: Language;
};

export type Language = {
  locale: string;
  hello: string;
  hello_name: string;
  hero_list: {
    manner: Hero;
    clean: Hero;
    ecology: Hero;
  };
};

type Hero = {
  title: string;
};
