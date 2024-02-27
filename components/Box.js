import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Box as B } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Box = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

  return (
    <B {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </B>
  )
}

export default Box
