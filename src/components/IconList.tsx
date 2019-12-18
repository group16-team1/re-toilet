import React from 'react'

import { assets4 } from '../assets/index'

const IconList: React.FC = () => {
  return (
    <div className="">
      <div className="columns is-mobile is-multiline" style={{ margin: '0 5rem' }}>
        {assets4.map((image, i) => {
          if ((i + 1) % 2 === 0) {
            return (
              <div className="column is-one-third" style={{ height: '30%' }}>
                <div className="">
                  <div className="card-content">
                    <div className="content">
                      The Beast stumbled in the dark...{i}
                      <div className="background-icon"><span className="icon-twitter"></span></div>
                    </div>
                  </div>
                  <div className="card-image">
                    <figure className="image">
                      <img src={image} alt="aaaa" style={{
                        width: 'auto',
                        height: 'auto',
                        maxWidth: '100%',
                        maxHeight: '100%'
                      }} />
                    </figure>
                  </div>
                </div>
              </div>
            )
          }

          return (
            <div className="column is-one-third" style={{ height: '30%' }}>
              <div className="">
                <div className="card-image">
                  <figure className="image">
                    <img src={image} alt="aaaa" style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    The Beast stumbled in the dark...{i}
                    <div className="background-icon"><span className="icon-twitter"></span></div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IconList