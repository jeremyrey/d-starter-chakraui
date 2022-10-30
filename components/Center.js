import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Center as C} from '@chakra-ui/react'

const Center = ({ blok }) => {
  let _props = '{}'
  if (blok.props != '')
    _props = blok.props
  return (
    <C {...storyblokEditable(blok)} key={blok._uid} {...JSON.parse(_props)}>
      <StoryblokComponent blok={blok.child[0]} key={blok.child[0]._uid} />
    </C>
  );
};

export default Center;
