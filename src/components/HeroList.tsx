import React from 'react'

import Hero from './Hero'

const HeroList: React.FC = () => {
  return (
    <div className="columns is-tablet">
      <Hero title="manner" />
      <Hero title="usage" />
      <Hero title="ecology" />
    </div>
  )
}

export default HeroList