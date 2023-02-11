import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Flex as F } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Flex = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  return (
    <F {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </F>
  )
}

export default Flex
