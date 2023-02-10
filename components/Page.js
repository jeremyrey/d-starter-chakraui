import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { Box } from '@chakra-ui/react'
import PropsToJson from '../hooks/props_to_json'

const Page = ({ blok }) => {
  let jsonParams = PropsToJson(blok.props)

  return (
    <Box {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </Box>
  )
}

export default Page
