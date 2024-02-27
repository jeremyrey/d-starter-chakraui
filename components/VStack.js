import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { VStack as V } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const VStack = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

  return (
    <V {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </V>
  )
}

export default VStack
