import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Container as C} from '@chakra-ui/react'

const Container = ({ blok }) => {
  let _props = '{}'
  if (blok.props != '')
    _props = blok.props
  return (
    <C {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(_props)} maxW="100%">
      {blok.children.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
    ))}
    </C>
  );
};

export default Container;
