import React from 'react'

type props = {
  logo: string;
}

const Icon: React.FC<props> = props => {
  return (
    <div className="column is-half-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd">
      <img src={props.logo} className="icon" alt="icon" style={{ height: '100px', width: '100px' }} />
    </div>
  )
}

export default Icon