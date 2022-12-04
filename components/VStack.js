import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { VStack as V } from '@chakra-ui/react'

function propsToJson(props) {
  return JSON.parse(props)
}

const VStack = ({ blok }) => {
  let _props = '{}'
  let json_params = {}

  if (blok.props != '')
    _props = blok.props

  try {
    json_params = propsToJson(_props)
  }catch(e){}
  
  return (
    <V {...storyblokEditable(blok)} key={blok._uid} {...json_params}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </V>
  );
};

export default VStack;
