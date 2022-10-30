import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { HStack as H } from '@chakra-ui/react'

const HStack = ({ blok }) => {
  return (
    <H {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(blok.props)}>
      {blok.children.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </H>
  );
};

export default HStack;
