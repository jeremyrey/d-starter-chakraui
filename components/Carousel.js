import { StoryblokComponent } from '@storyblok/react'
import { Box, Flex } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import propsToJson from '../hooks/propsToJson'

const ARROW_DISABLED_OPACITY = 0.3

const Carousel = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const containerJsonParams = propsToJson(blok.container_props)
  const elementRef = useRef(null)
  const [arrowLeftDisabled, setArrowLeftDisabled] = useState(true)
  const [arrowRightDisabled, setArrowRightDisabled] = useState(false)

  const handleHorizantalScroll = (speed, distance, step) => {
    let scrollAmount = 0
    const slideTimer = setInterval(() => {
      elementRef.current.scrollLeft += step
      scrollAmount += Math.abs(step)
      if (elementRef.current.scrollLeft <= 0) {
        setArrowLeftDisabled(true)
      } else {
        setArrowLeftDisabled(false)
      }
      if (
        elementRef.current.scrollLeft >=
        elementRef.current.scrollWidth - elementRef.current.clientWidth
      ) {
        setArrowRightDisabled(true)
      } else {
        setArrowRightDisabled(false)
      }
      if (scrollAmount >= distance) {
        clearInterval(slideTimer)
      }
    }, speed)
  }

  return (
    <Box {...jsonParams}>
      <Box
        opacity={arrowLeftDisabled ? ARROW_DISABLED_OPACITY : 1}
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
        opacity={arrowRightDisabled ? ARROW_DISABLED_OPACITY : 1}
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
