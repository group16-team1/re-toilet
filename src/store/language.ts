import {createModule} from "typeless";
import * as Rx from "typeless/rx";
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
