import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { Link as L } from '@chakra-ui/react'
import PropsToJson from '../hooks/props_to_json'

const Link = ({ blok }) => {
  return (
    <L href={blok.link.cached_url} {...storyblokEditable(blok)} key={blok._uid}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </L>
  )
}

export default Link
