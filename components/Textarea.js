import { Textarea as T } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../hooks/propsToJson'

const Textarea = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  return (
    <>
      <T
        {...storyblokEditable(blok)}
        key={blok._uid}
        {...jsonParams}
        id={jsonParams.name}
      />
    </>
  )
}

export default Textarea
