import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Center as C } from '@chakra-ui/react'
import PropsToJson from '../hooks/props_to_json'

const Center = ({ blok }) => {
  let jsonParams = PropsToJson(blok.props)

  return (
    <C {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content && (
        <StoryblokComponent blok={blok.content[0]} key={blok.content[0]._uid} />
      )}
    </C>
  )
}

export default Center
