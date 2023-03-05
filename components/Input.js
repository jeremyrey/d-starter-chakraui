import { Input as I } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../hooks/propsToJson'

const Input = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  return (
    <>
      <I
        {...storyblokEditable(blok)}
        key={blok._uid}
        {...jsonParams}
        id={jsonParams.name}
      />
    </>
  )
}

export default Input
