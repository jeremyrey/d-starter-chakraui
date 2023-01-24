import { Heading as H } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'

function propsToJson(props) {
  return JSON.parse(props)
}

const Heading = ({ blok }) => {
  let _props = '{}'
  let json_params = {}

  if (blok.props != '') _props = blok.props

  try {
    json_params = propsToJson(_props)
  } catch (e) {}

  return (
    <H
      {...storyblokEditable(blok)}
      key={blok._uid}
      {...json_params}
      dangerouslySetInnerHTML={{
        __html: blok.content.replace(/\n/g, '<br />'),
      }}
    />
  )
}

export default Heading
