/** @jsx jsx */
import React from 'react'
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core'

import { hand } from '../../assets/index'
import { getLanguageState } from '../../store/language'
import { hero_list } from '../../locales/hero_list'

const Manner: React.FC = () => {
  // get state from store
  const { language } = getLanguageState.useState();
  const title = 'manner'

  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-5" css={rootStyle}>
            <figure className="image is-4by3">
              <img src={hand} alt="Description" css={imgStyle} style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '100%',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }} />
            </figure>
          </div>
          <div className="column is-6 is-offset-1" css={contentStyle}>
            <h1 className="title is-2">
              {hero_list[title].title[language]}
            </h1>
            <h2 className="subtitle is-4">
              {hero_list[title].desc[language]}
            </h2>
            <p className="has-text-centered">
              <button className="button is-medium is-info is-outlined">
                <Link to={'/manner'} >
                  read more
                </Link>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const rootStyle = css`
  position: relative;
`

const imgStyle = css`
  @media (max-width: 769px) {
    opacity: 0.3;
  }
`

const contentStyle = css`
  @media (max-width: 769px) {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 40%;
  }
  @media (max-width: 512px) {
    top: 30%;
  }
`

export default Manner