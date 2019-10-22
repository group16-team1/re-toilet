import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

import { hero_list } from '../locales/hero_list'
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
      <a href={'/' + props.title}>{hero_list[props.title].title[language]}</a>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Hero