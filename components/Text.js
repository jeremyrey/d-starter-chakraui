import { Text as T } from '@chakra-ui/react'
import { storyblokEditable } from "@storyblok/react";

const Text = ({ blok }) => {
  return (
    <T {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(blok.props)}>
      {blok.content}
    </T>
  );
};

export default Text;
