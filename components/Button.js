import { storyblokEditable } from '@storyblok/react'
import { Button as B } from '@chakra-ui/react'
import PropsToJson from '../hooks/props_to_json'

const Button = ({ blok }) => {
  let jsonParams = PropsToJson(blok.props)

  return (
    <B {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content}
    </B>
  )
}

export default Button
