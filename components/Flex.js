import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Flex as F} from '@chakra-ui/react'

const Flex = ({ blok }) => {
  let _props = '{}'
  if (blok.props != '')
    _props = blok.props
  return (
    <F {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(_props)}>
      {blok.children.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
    ))}
    </F>
  );
};

export default Flex;
