import {LocaleData} from "./type";

type Hero = {
  title: LocaleData;
};

type HeroList = {
  manner: Hero;
  clean: Hero;
  eco: Hero;
};

export const hero_list: HeroList = {
         manner: {
           title: {
             en: "Manner",
             ja: "マナー",
             cs: "礼节",
             ct: "禮節"
           }
         },
         clean: {
           title: {
             en: "Clean",
             ja: "清潔",
             cs: "清洁度",
             ct: "乾淨"
           }
         },
         eco: {
           title: {
             en: "Eco-Conscious",
             ja: "エコ",
             cs: "环境保护",
             ct: "环境保护"
           }
         }
       };
 