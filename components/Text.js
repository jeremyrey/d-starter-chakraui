import { Text as T } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import PropsToJson from '../hooks/props_to_json'

const Text = ({ blok }) => {
  let jsonParams = PropsToJson(blok.props)

  return (
    <T {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content}
    </T>
  )
}

export default Text
