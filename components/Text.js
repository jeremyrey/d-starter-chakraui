import { Text as T } from '@chakra-ui/react'
import { storyblokEditable } from "@storyblok/react";

function propsToJson(props) {
  return JSON.parse(props)
}

const Text = ({ blok }) => {
  let _props = '{}'
  let json_params = {}

  if (blok.props != '')
    _props = blok.props

  try {
    json_params = propsToJson(_props)
  }catch(e){}
  
  return (
    <T {...storyblokEditable(blok)} key={blok._uid} {...json_params}>
      {blok.content}
    </T>
  );
};

export default Text;
