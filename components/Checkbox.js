import { Checkbox as C } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../hooks/propsToJson'

const Checkbox = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

  return (
    <C
      {...storyblokEditable(blok)}
      key={blok._uid}
      {...jsonParams}
      id={jsonParams.name}
    >
      {jsonParams.text}
    </C>
  )
}

export default Checkbox
