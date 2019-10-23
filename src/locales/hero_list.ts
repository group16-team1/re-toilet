import {LocaleData} from "./type";

type Hero = {
  title: LocaleData;
};

type HeroList = {
  manner: Hero;
  clean: Hero;
  ecology: Hero;
};

export const hero_list: HeroList = {
  manner: {
    title: {
      en: "Manner",
      ja: "マナー",
      cn: "禮節"
    }
  },
  clean: {
    title: {
      en: "Clean",
      ja: "清潔",
      cn: "乾淨"
    }
  },
  ecology: {
    title: {
      en: "Echology",
      ja: "エコ",
      cn: "環保"
    }
  }
};
