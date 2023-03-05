import { Textarea as T } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../hooks/propsToJson'

const Textarea = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  return (
    <>
      <label for={jsonParams.name} style={{ display: 'none' }}>
        {jsonParams.name_text}
      </label>
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
