import { storyblokEditable } from "@storyblok/react";
import { Box } from '@chakra-ui/react'

const Feature = ({ blok }) => {
  console.log(JSON.parse(blok.props))
  return (
    <div {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(blok.props)}>
      <h2 className="text-lg"> {blok.name} </h2>
    </div>
  );
};

export default Feature;
