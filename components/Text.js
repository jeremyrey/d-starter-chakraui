import { Text as T } from '@chakra-ui/react'
import { storyblokEditable } from "@storyblok/react";

const Text = ({ blok }) => {
  let _props = '{}'
  if (blok.props != '')
    _props = blok.props
  return (
    <T {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(_props)}>
      {blok.content}
    </T>
  );
};

export default Text;
