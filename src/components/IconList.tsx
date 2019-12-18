import React from 'react'

import Icon from './Icon'
import { assets4 } from '../assets/index'

const IconList: React.FC = () => {
  return (
    <div className="columns is-tablet is-multiline">
      {assets4.map(image => {
        return <Icon logo={image} key={image} />
      })}
    </div>
  )
}

export default IconList