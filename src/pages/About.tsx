import React from 'react'

import { BackBtn } from '../components'
import { backend, backend_detail, goal, goal_detail, contents, contents_detail, effects, effects_detail } from '../locales/about'
import { getLanguageState } from '../store/language'

const About: React.FC = () => {
  const { language } = getLanguageState.useState();

  return (
    <div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-10 is-offset-1">
            <h1 className="title">{backend[language]}</h1>
            <br />
            <h2 className="subtitle" style={{ textAlign: 'start' }}>
              {backend_detail[language]}
            </h2>
          </div>
        </div>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-10 is-offset-1">
            <h1 className="title">{goal[language]}</h1>
            <br />
            <h2 className="subtitle" style={{ textAlign: 'start' }}>
              {goal_detail[language]}
            </h2>
          </div>
        </div>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-10 is-offset-1">
            <h1 className="title">{contents[language]}</h1>
            <br />
            <h2 className="subtitle" style={{ textAlign: 'start' }}>
              {contents_detail[language]}
            </h2>
          </div>
        </div>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-10 is-offset-1">
            <h1 className="title">{effects[language]}</h1>
            <br />
            <h2 className="subtitle" style={{ textAlign: 'start' }}>
              {effects_detail[language]}
            </h2>
          </div>
        </div>
      </div>

      <BackBtn />
    </div>
  )
}

export default About