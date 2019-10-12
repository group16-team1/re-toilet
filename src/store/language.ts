import {createModule} from "typeless";

/* == Module Interface == */

export const [useModule, LanguageActions, getLanguageState] = createModule(
  Symbol("language")
)
  // Create Actions Creators
  .withActions({
    changeLanguage: (language: string) => ({payload: {language}})
  })
  .withState<LanguageState>();

export interface LanguageState {
  language: "en" | "ja";
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
    switch (language) {
      case "ja":
        state.language = "ja";
        break;
      default:
        state.language = "en";
        break;
    }
  });
