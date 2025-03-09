import { Box as B } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../../hooks/propsToJson'
import { useContext } from 'react'
import { BlogContext } from '../../contexts'
import example_post from '../../templates/post.json'

const Content = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const post = useContext(BlogContext)
  const content = post
    ? post.content.rendered
    : example_post[0].content.rendered

  return (
    <B
      {...storyblokEditable(blok)}
      key={blok._uid}
      {...jsonParams}
      dangerouslySetInnerHTML={{ __html: content }}
    ></B>
  )
}

export default Content
