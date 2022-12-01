import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Container as C} from '@chakra-ui/react'

function propsToJson(props) {
  return JSON.parse(props)
}

const Container = ({ blok }) => {
  let _props = '{}'
  let json_params = {}

  if (blok.props != '')
    _props = blok.props

  try {
    json_params = propsToJson(_props)
  }catch(e){}

  return (
    <C {...storyblokEditable(blok)} key={blok._uid} {...json_params} maxW="100%">
      {blok.children.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
    ))}
    </C>
  );
};

export default Container;
