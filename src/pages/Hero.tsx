import React from 'react'
import { Link } from 'react-router-dom';

import { hero_list } from '../locales/hero_list'
import { getLanguageState } from '../store/language'

import { BackBtn } from '../components'

type props = {
  title: 'manner' | 'clean' | 'eco';
  image: string;
}

const Hero: React.FC<props> = props => {
  // get state from store
  const { language } = getLanguageState.useState();

  return (
    <div>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <figure className="image is-16by9">
                  <img src={props.image} alt="" style={{
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
            </div>

            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">December 25, 2018</h2>
                    <h1 className="title">Getting Started</h1>
                    <p>This is a starter template for creating a beautiful, customizable blog with minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                  configuration settings can be found in config</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <BackBtn />
    </div>
  )
}

export default Hero