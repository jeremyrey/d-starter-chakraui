import { Text as T } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../hooks/propsToJson'
import { render } from 'storyblok-rich-text-react-renderer'

const Text = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  return (
    <T {...storyblokEditable(blok)} key={blok._uid} {...jsonParams} as="div">
      {render(blok.content)}
    </T>
  )
}

export default Text
