import React from 'react'

import { hero_list } from '../locales/hero_list'
import { useModule, getLanguageState } from '../store/language'

type props = {
  title: 'manner' | 'clean' | 'ecology';
  image: string;
}

const Hero: React.FC<props> = props => {
  // load epic and reducer
  useModule();

  // get state from store
  const { language } = getLanguageState.useState();

  return (
    <div className="column hero" style={{ position: "relative", padding: 0 }}>
      <a href={'/' + props.title}>
        <img src={props.image} className="App-logo" alt="logo" style={{ filter: "brightness(50%)", objectFit: "cover", width: "100%"}} />
        <p style={{
          color: "white",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          margin: 0,
          padding: 0
        }}>{hero_list[props.title].title[language]}</p>
      </a>
    </div>
  )
}

export default Hero