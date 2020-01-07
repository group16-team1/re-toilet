import { LocaleData } from "./type";

type Hero = {
  title: LocaleData;
  desc: LocaleData;
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
    },
    desc: {
      en: "Do not bother others. Consider your surroundings.",
      ja: "他の人に迷惑をかけない。周囲に配慮しよう。",
      cs: "不要打扰别人。 考虑一下您的周围环境。",
      ct: "不要打擾別人。 考慮一下您的周圍環境。"
    }
  },
  clean: {
    title: {
      en: "Clean",
      ja: "清潔",
      cs: "清洁度",
      ct: "乾淨"
    },
    desc: {
      en: "Keep the toilet clean. If dirty, clean.",
      ja: "トイレを清潔に保とう。汚したら綺麗に。",
      cs: "保持马桶清洁。 如果不干净，请清洁。",
      ct: "保持馬桶清潔。 如果不干淨，請清潔。"
    }
  },
  eco: {
    title: {
      en: "Eco-Conscious",
      ja: "エコ",
      cs: "环境保护",
      ct: "环境保护"
    },
    desc: {
      en: "Beware of wasted toilet paper!",
      ja: "トイレットペーパーの無駄遣いに注意！",
      cs: "当心浪费的厕纸！",
      ct: "當心浪費的廁紙！"
    }
  }
};
