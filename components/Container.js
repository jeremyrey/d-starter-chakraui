import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Container as C } from '@chakra-ui/react'
import PropsToJson from '../hooks/props_to_json'

const Container = ({ blok }) => {
  let jsonParams = PropsToJson(blok.props)

  return (
    <C {...storyblokEditable(blok)} key={blok._uid} {...jsonParams} maxW="100%">
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </C>
  )
}

export default Container
