import { storyblokEditable } from '@storyblok/react'
import { Button as B } from '@chakra-ui/react'

function propsToJson(props) {
  return JSON.parse(props)
}

const Button = ({ blok }) => {
  let _props = '{}'
  let json_params = {}

  if (blok.props != '') _props = blok.props

  try {
    json_params = propsToJson(_props)
  } catch (e) {}

  return (
    <B {...storyblokEditable(blok)} key={blok._uid} {...json_params}>
      {blok.content}
    </B>
  )
}

export default Button
