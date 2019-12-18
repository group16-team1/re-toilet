import React from 'react'

import { About, HeroList, IconList } from '../components'

const Home: React.FC = () => {
  return (
    <header className="App-header">
      <div className="container">
        <div className="section">
          <About />
          <HeroList />
          <IconList />
        </div>
      </div>
    </header>
  )
}

export default Home