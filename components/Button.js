import { storyblokEditable } from "@storyblok/react";
import { Button as B } from '@chakra-ui/react'

const Button = ({ blok }) => {
  let _props = '{}'
  if (blok.props != '')
    _props = blok.props
  return (
    <B {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(_props)}>
      {blok.text}
    </B>
  );
};

export default Button;
