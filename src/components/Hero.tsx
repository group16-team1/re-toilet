import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

import { locales } from '../locales/index'
import { useModule, getLanguageState } from '../store/language'
console.log(locales)

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
      <Link to={'/' + props.title}>{locales[language].hero_list[props.title].title}</Link>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Hero