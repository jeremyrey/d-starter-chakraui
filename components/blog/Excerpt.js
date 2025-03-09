import { Box as B } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../../hooks/propsToJson'
import { useContext } from 'react'
import { BlogContext } from '../../contexts'
import example_post from '../../templates/post.json'

const Excerpt = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const post = useContext(BlogContext)
  const content = post
    ? post.excerpt.rendered
    : example_post[0].excerpt.rendered

  return (
    <B
      {...storyblokEditable(blok)}
      key={blok._uid}
      {...jsonParams}
      dangerouslySetInnerHTML={{ __html: content }}
    ></B>
  )
}

export default Excerpt
