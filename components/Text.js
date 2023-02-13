import { Text as T } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../hooks/propsToJson'
import { render } from 'storyblok-rich-text-react-renderer'

const Text = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)
  console.log(blok.content)

  return <div>{render(document)}</div>
}

export default Text
