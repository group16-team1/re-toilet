import {Languages, Locale} from "./type";

import ja_JP from "./ja_JP";
import en_US from "./en_US";

export const locales: Languages = {
  ja: ja_JP,
  en: en_US
};

export const locale_list: Locale[] = [
  {
    locale: "en",
    language: "English"
  },
  {
    locale: "ja",
    language: "日本語"
  }
];
