import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="column is-6 is-offset-3">
          <h1 className="title">
            re:Toilet
                        </h1>
          <h2 className="subtitle" style={{ marginTop: '1rem' }}>
            私たちは視覚デザインから、トイレの利便性とマナーの向上を目指します。
            <br />
            <br />
            <Link to={'/about'}>
              詳しく読む
              </Link>
          </h2>
        </div>
      </div>
    </div>
  )
}
