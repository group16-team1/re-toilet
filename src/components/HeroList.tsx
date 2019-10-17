import React from 'react'

import Hero from './Hero'

const HeroList: React.FC = () => {
  return (
    <div className="columns is-tablet">
      <Hero key="manner" title={'manner'} />
      <Hero key="usage" title={'usage'} />
      <Hero key="ecology" title={'ecology'} />
    </div>
  )
}

export default HeroList