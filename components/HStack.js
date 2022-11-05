import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { HStack as H } from '@chakra-ui/react'

const HStack = ({ blok }) => {
  let _props = '{}'
  if (blok.props != '')
    _props = blok.props
  return (
    <H {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(_props)}>
      {blok.children.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </H>
  );
};

export default HStack;
