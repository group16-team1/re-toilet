import React from 'react'

import { assets } from '../assets/index'
import { local_icon_detail } from '../locales/icon_detail'
import { line1, line2 } from '../locales//icon_list'
import { getLanguageState } from '../store/language'

const changeState = (id: string) => {
  const elm = document.getElementById(id)
  if (elm && elm.getAttribute('class') === 'modal modal-fx-fadeInScale') {
    elm.setAttribute('class', 'modal modal-fx-fadeInScale is-active')
  } else if (elm) {
    elm.setAttribute('class', 'modal modal-fx-fadeInScale')
  }
}

const IconList: React.FC = () => {
  const { language } = getLanguageState.useState();

  return (
    <div className="">
      <h1 className="title">
        re:Design
      </h1>
      <h2 className="subtitle" style={{ marginTop: '1rem' }}>
        {line1[language]}
        <br />
        {line2[language]}
      </h2>

      <div className="columns is-tablet is-multiline" style={{ margin: '0 5rem' }}>
        {assets.map((image) => {
          return (
            <div key={image.src} className="column is-one-third" style={{ height: '30%' }}>
              <div className="" style={{
                padding: '20%'
              }}>
                <div className="card-image" onClick={() => changeState(`modal-${image.src}`)}>
                  <figure className="image">
                    <img src={image.src} alt="aaaa" style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }} />
                  </figure>
                </div>
              </div>

              <div id={`modal-${image.src}`} className="modal modal-fx-slideBottom" style={{ padding: '1rem' }}>
                <div className="modal-background" onClick={() => changeState(`modal-${image.src}`)}></div>
                <div className="modal-content" style={{
                  backgroundColor: 'white',
                  borderRadius: 15
                }}>
                  <section className="hero is-medium is-info is-bold" style={{
                    padding: '1rem'
                  }}>
                    <div className="hero-body">
                      <div className="container">
                        <div className="columns is-tablet">
                          <div className="column">
                            <figure className="image">
                              <img src={image.src} alt="aaaa" style={{
                                width: 'auto',
                                height: '10rem',
                                maxWidth: '100%',
                                maxHeight: '100%'
                              }} />
                            </figure>
                          </div>
                          <div className="column is-three-quarters-mobile is-two-thirds-tablet is-three-quarter-desktop">
                            <h1 className="title">
                              {local_icon_detail[image.name].title[language]}
                            </h1>
                            <h2 className="subtitle">
                              {local_icon_detail[image.name].content[language]}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={() => changeState(`modal-${image.src}`)}></button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IconList