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

interface Icon {
  title: LocaleData;
  content: LocaleData;
  [key: string]: LocaleData;
}

export interface IconList {
  flush_small: Icon;
  flush_big: Icon;
  wash: Icon;
  wash_front: Icon;
  open: Icon;
  open_lid: Icon;
  [key: string]: Icon;
}

export interface IconListI {
  flush_small: Icon;
  flush_big: Icon;
  wash: Icon;
  wash_front: Icon;
  open: Icon;
  open_lid: Icon;
  [key: string]: Icon;
}
