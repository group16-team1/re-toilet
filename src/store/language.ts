import {createModule} from "typeless";
import {LocaleLang} from "../locales/type";

/* == Module Interface == */

export const [useModule, LanguageActions, getLanguageState] = createModule(
  Symbol("language")
)
  // Create Actions Creators
  .withActions({
    changeLanguage: (language: LocaleLang) => ({payload: {language}})
  })
  .withState<LanguageState>();

export interface LanguageState {
  language: LocaleLang;
}

/* == Module Implementation == */

const initialState: LanguageState = {
  language: "en"
};
const user_lang =
  (window.navigator.languages && window.navigator.languages[0]) ||
  window.navigator.language;
console.log("user_lang", user_lang);

// Create a reducer
// Under the hood it uses `immer` and state mutations are allowed
useModule
  .reducer(initialState)
  .on(LanguageActions.changeLanguage, (state, {language}) => {
    state.language = language;
  });
