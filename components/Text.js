import { Box as B } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../hooks/propsToJson'
import { render } from 'storyblok-rich-text-react-renderer'

const Text = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  return (
    <B {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {render(blok.content)}
    </B>
  )
}

export default Text
