import React from 'react'
import { Link } from 'react-router-dom'

import { line1, line2, read_more } from '../locales/about'
import { getLanguageState } from '../store/language'

const About: React.FC = () => {
  const { language } = getLanguageState.useState();

  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">
            re:Toilet
                        </h1>
          <h2 className="subtitle" style={{ marginTop: '1rem' }}>
            {line1[language]}
            <br />
            {line2[language]}
            <br />
            <br />
            <Link to={'/about'}>
              {read_more[language]}
            </Link>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default About