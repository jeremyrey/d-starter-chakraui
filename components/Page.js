import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Box } from '@chakra-ui/react'

const Page = ({ blok }) => {
  let _props = '{}'
  if (blok.props != '')
    _props = blok.props
  return (
    <Box 
      {...storyblokEditable(blok)} 
      key={blok._uid} 
      {...JSON.parse(_props)}
    >
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </Box>
  )
};

export default Page;
