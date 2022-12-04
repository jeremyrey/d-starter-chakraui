import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Flex as F} from '@chakra-ui/react'

function propsToJson(props) {
  return JSON.parse(props)
}

const Flex = ({ blok }) => {
  let _props = '{}'
  let json_params = {}

  if (blok.props != '')
    _props = blok.props

  try {
    json_params = propsToJson(_props)
  }catch(e){}
  
  return (
    <F {...storyblokEditable(blok)} key={blok._uid} {...json_params}>
      {blok.content.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
    ))}
    </F>
  );
};

export default Flex;
