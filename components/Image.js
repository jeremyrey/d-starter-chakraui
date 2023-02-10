import { Image as I } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import PropsToJson from '../hooks/props_to_json'

const Image = ({ blok }) => {
  let jsonParams = PropsToJson(blok.props)

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
