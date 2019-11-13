import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <p>私たちは、視覚デザインからトイレの利便性とマナーの向上を目指します。</p>
      <Link to={'/about'} >詳しく読む</Link>
    </div>
  )
}
