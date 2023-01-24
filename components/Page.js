import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import { Box } from '@chakra-ui/react'

function propsToJson(props) {
  return JSON.parse(props)
}

const Page = ({ blok }) => {
  let _props = '{}'
  let json_params = {}

  if (blok.props != '') _props = blok.props

  try {
    json_params = propsToJson(_props)
  } catch (e) {}

  return (
    <Box {...storyblokEditable(blok)} key={blok._uid} {...json_params}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </Box>
  )
}

export default Page
