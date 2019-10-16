import React from 'react'
import logo from '../logo.svg';

import { locales } from '../locales/index'
import { useModule, getLanguageState } from '../store/language'

type props = {
  title: 'manner' | 'usage' | 'ecology';
}

const Hero: React.FC<props> = props => {
  // load epic and reducer
  useModule();

  // get state from store
  const { language } = getLanguageState.useState();

  return (
    <div className="column">
      <p>{locales[language].hero_list[props.title].title}</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Hero