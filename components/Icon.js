import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { HamburgerIcon, ChevronLeftIcon } from '@chakra-ui/icons'

const mapping = {
  hamburger: <HamburgerIcon />,
  chevron_left: <ChevronLeftIcon />,
}

const Icon = ({ blok }) => {
  return mapping[blok.name]
}

export default Icon
