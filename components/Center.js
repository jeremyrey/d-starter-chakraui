import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Center as C} from '@chakra-ui/react'

function propsToJson(props) {
  return JSON.parse(props)
}

const Center = ({ blok }) => {
  let _props = '{}'
  let json_params = {}

  if (blok.props != '')
    _props = blok.props

  try {
    json_params = propsToJson(_props)
  }catch(e){}
  
  return (
    <C {...storyblokEditable(blok)} key={blok._uid} {...json_params}>
      <StoryblokComponent blok={blok.child[0]} key={blok.child[0]._uid} />
    </C>
  );
};

export default Center;
