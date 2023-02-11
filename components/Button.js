import { storyblokEditable } from '@storyblok/react'
import { Button as B } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Button = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  return (
    <B {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content}
    </B>
  )
}

export default Button
