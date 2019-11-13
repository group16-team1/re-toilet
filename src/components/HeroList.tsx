import React from 'react'

import Hero from './Hero'
import { manner, clean, eco } from '../assets/index'

const HeroList: React.FC = () => {
  return (
    <div className="columns is-tablet">
      <Hero key="manner" title={'manner'} image={manner} />
      <Hero key="clean" title={'clean'} image={clean} />
      <Hero key="eco" title={'eco'} image={eco} />
    </div>
  )
}

export default HeroList