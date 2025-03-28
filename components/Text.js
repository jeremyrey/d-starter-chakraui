import { Box as B } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../hooks/propsToJson'
import { render } from 'storyblok-rich-text-react-renderer'
import { useEffect, useState } from 'react'

const Text = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const [content, setContent] = useState(null)

  useEffect(() => {
    setContent(render(blok.content))
  }, [blok])

  return (
    <B {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {content}
    </B>
  )
}

export default Text
