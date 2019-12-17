/** @jsx jsx */
import React from 'react'
import { Link } from 'react-router-dom';
import { jsx, css } from '@emotion/core'

import { cleaning } from '../../assets/index'
import { getLanguageState } from '../../store/language'
import { hero_list } from '../../locales/hero_list'

const Clean: React.FC = () => {
  // get state from store
  const { language } = getLanguageState.useState();
  const title = 'clean'

  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-5" css={rootStyle}>
            <figure className="image is-4by3">
              <img src={cleaning} alt="Description" css={imgStyle} style={{
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
              Let this cover page describe a product or service.
            </h2>
            <p className="has-text-centered">
              <button className="button is-medium is-info is-outlined">
                <Link to={'/about'} >
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
  top: 33%;
  }
  @media (max-width: 512px) {
    top: 25%;
  }
`

export default Clean