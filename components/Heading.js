import { Heading as H } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import PropsToJson from '../hooks/props_to_json'

const Heading = ({ blok }) => {
  let jsonParams = PropsToJson(blok.props)

  return (
    <H
      {...storyblokEditable(blok)}
      key={blok._uid}
      {...jsonParams}
      dangerouslySetInnerHTML={{
        __html: blok.content.replace(/\n/g, '<br />'),
      }}
    />
  )
}

export default Heading
