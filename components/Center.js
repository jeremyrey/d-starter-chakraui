import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Center as C } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Center = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

  return (
    <C {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content && (
        <StoryblokComponent blok={blok.content[0]} key={blok.content[0]._uid} />
      )}
    </C>
  )
}

export default Center
