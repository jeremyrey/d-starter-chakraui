import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Flex as F} from '@chakra-ui/react'

const Flex = ({ blok }) => {
  return (
    <F {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(blok.props)}>
      {blok.children.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
    ))}
    </F>
  );
};

export default Flex;
