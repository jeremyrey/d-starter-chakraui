import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Box as B } from '@chakra-ui/react'
import PropsToJson from '../hooks/props_to_json'

const Box = ({ blok }) => {
  let jsonParams = PropsToJson(blok.props)

  return (
    <B {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </B>
  )
}

export default Box
