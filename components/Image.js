import { Image as I } from '@chakra-ui/react'
import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => {
  let _props = '{}'
  if (blok.props != '')
    _props = blok.props
  return (
    <I src={blok.src.filename} alt={blok.alt} htmlWidth={blok.width} htmlHeight={blok.height} {...JSON.parse(_props)}/>
  );
};

export default Image;
