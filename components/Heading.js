import { Heading as H } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../hooks/propsToJson'

const Heading = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

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
