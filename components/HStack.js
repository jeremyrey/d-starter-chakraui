import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { HStack as H } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const HStack = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  return (
    <H {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </H>
  )
}

export default HStack
