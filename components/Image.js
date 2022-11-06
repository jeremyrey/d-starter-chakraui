import { Image as I } from '@chakra-ui/react'
import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => {
  return (
    <I src={blok.src.filename} alt={blok.alt} />
  );
};

export default Image;
