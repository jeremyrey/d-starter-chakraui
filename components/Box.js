import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { chakra } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'
import { motion } from 'motion/react'

const Box = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const MotionBox = chakra(motion.div)

  return (
    <MotionBox {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </MotionBox>
  )
}

export default Box
