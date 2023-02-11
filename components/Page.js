import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { Box } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Page = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  return (
    <Box {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </Box>
  )
}

export default Page
