import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Container as C } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Container = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  return (
    <C {...storyblokEditable(blok)} key={blok._uid} {...jsonParams} maxW="100%">
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </C>
  )
}

export default Container
