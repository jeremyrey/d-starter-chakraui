import { storyblokEditable } from "@storyblok/react";
import { Button as B } from '@chakra-ui/react'

const Button = ({ blok }) => {
  return (
    <B {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(blok.props)}>
      {blok.text}
    </B>
  );
};

export default Button;
