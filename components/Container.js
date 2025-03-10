import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Container as C } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Container = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

  return (
    <C {...storyblokEditable(blok)} key={blok._uid} maxW="100%" {...jsonParams}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </C>
  )
}

export default Container
