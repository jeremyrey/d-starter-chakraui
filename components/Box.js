import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Box as B} from '@chakra-ui/react'

const Box = ({ blok }) => {
  console.log(blok)
  let _props = '{}'
  if (blok.props != '')
    _props = blok.props
  return (
    <B {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(_props)}>
      {blok.children.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
    ))}
    </B>
  );
};

export default Box;
