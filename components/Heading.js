import { Heading as H } from '@chakra-ui/react'
import { storyblokEditable } from "@storyblok/react";

const Heading = ({ blok }) => {
  let _props = '{}'
  if (blok.props != '')
    _props = blok.props
  return (
    <H {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(_props)}>
      {blok.text}
    </H>
  );
};

export default Heading;
