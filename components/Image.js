import { Image as I } from '@chakra-ui/react'
import { storyblokEditable } from "@storyblok/react";

function propsToJson(props) {
  return JSON.parse(props)
}

const Image = ({ blok }) => {
  let _props = '{}'
  let json_params = {}

  if (blok.props != '')
    _props = blok.props

  try {
    json_params = propsToJson(_props)
  }catch(e){}
  
  return (
    <I src={blok.src.filename} alt={blok.alt} htmlWidth={blok.width} htmlHeight={blok.height} {...json_params}/>
  );
};

export default Image;
