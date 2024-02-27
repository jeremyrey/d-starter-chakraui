import { Image as I } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../hooks/propsToJson'

const Image = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

  return (
    <I
      src={blok.src.filename}
      alt={blok.alt}
      htmlWidth={blok.width}
      htmlHeight={blok.height}
      {...jsonParams}
    />
  )
}

export default Image
