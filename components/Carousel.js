import { StoryblokComponent } from '@storyblok/react'
import { Box, Flex } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import propsToJson from '../hooks/propsToJson'

const Carousel = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const containerJsonParams = propsToJson(blok.container_props)
  const elementRef = useRef(null)

  const handleHorizantalScroll = (speed, distance, step) => {
    let scrollAmount = 0
    const slideTimer = setInterval(() => {
      elementRef.current.scrollLeft += step
      scrollAmount += Math.abs(step)
      if (scrollAmount >= distance) {
        clearInterval(slideTimer)
      }
    }, speed)
  }

  return (
    <Box {...jsonParams}>
      <Box
        onClick={() =>
          handleHorizantalScroll(
            25,
            100,
            0 - elementRef.current.getBoundingClientRect().width
          )
        }
      >
        <StoryblokComponent
          blok={blok.arrow_left[0]}
          key={blok.arrow_left[0]._uid}
        />
      </Box>
      <Box
        onClick={() =>
          handleHorizantalScroll(
            25,
            100,
            elementRef.current.getBoundingClientRect().width
          )
        }
      >
        <StoryblokComponent
          blok={blok.arrow_right[0]}
          key={blok.arrow_right[0]._uid}
        />
      </Box>
      <Flex
        ref={elementRef}
        alignItems={'flex-start'}
        overflow={'hidden'}
        {...containerJsonParams}
      >
        {blok.slides.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </Flex>
    </Box>
  )
}

export default Carousel
