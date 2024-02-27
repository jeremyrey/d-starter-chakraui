import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { Link as L } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Link = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  return (
    <L
      href={blok.link.cached_url}
      {...storyblokEditable(blok)}
      key={blok._uid}
      {...jsonParams}
    >
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </L>
  )
}

export default Link
