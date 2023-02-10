import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { VStack as V } from '@chakra-ui/react'
import PropsToJson from '../hooks/props_to_json'

const VStack = ({ blok }) => {
  let jsonParams = PropsToJson(blok.props)

  return (
    <V {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </V>
  )
}

export default VStack
