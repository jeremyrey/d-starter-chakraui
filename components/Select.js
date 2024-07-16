import { Select as S } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../hooks/propsToJson'

const Select = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

  return (
    <S
      {...storyblokEditable(blok)}
      key={blok._uid}
      {...jsonParams}
      id={jsonParams.name}
    >
      {jsonParams.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </S>
  )
}

export default Select
