import React from 'react'
import propsToJson from '../hooks/propsToJson'
import getIconsSetByProvider from '../icons/utils'

const Icon = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

  return React.createElement(
    getIconsSetByProvider((blok.provider ||= 'chakra'))[
      (blok.name ||= 'email')
    ],
    {
      ...jsonParams,
    }
  )
}

export default Icon
