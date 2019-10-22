import {LocaleData} from './type'

type Hero = {
  title: LocaleData 
}

type HeroList = {
  manner: Hero;
  usage: Hero;
  ecology: Hero; 
}

export const hero_list: HeroList = {
   manner: {
     title: {
      en: "Manner",
      ja: "マナー"
    }
   },
   usage:{
     title: {
      en: "Usage",
      ja: "使いかた"
    }
   },
   ecology:{
     title: {
      en: "Echology",
      ja: "エコ"
    }
   }
}