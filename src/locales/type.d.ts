export type Locale = {
  locale: string;
  language: string;
};

export type Languages = {
  en: Language;
  ja: Language;
};

export type Language = {
  hello: string;
  hello_name: string;
  hero_list: {
    manner: Hero;
    usage: Hero;
    ecology: Hero;
  }
};

type Hero = {
  title: string;
}