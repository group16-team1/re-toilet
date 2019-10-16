import React from 'react'
import logo from '../logo.svg';

const HeroList: React.FC = () => {
  return (
    <div className="columns is-tablet">
      <div className="column">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="column">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="column">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  )
}

export default HeroList