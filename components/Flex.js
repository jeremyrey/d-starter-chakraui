import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Flex as F } from '@chakra-ui/react'
import PropsToJson from '../hooks/props_to_json'

const Flex = ({ blok }) => {
  let jsonParams = PropsToJson(blok.props)

  return (
    <F {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </F>
  )
}

export default Flex
