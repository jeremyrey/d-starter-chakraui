import { Heading as H } from '@chakra-ui/react'
import { storyblokEditable } from '@storyblok/react'
import propsToJson from '../../hooks/propsToJson'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/index'
import example_post from '../../templates/post.json'

const Title = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const post = useContext(BlogContext)
  const content = post
    ? post.title.rendered.replace(/\n/g, '<br />')
    : example_post[0].title.rendered.replace(/\n/g, '<br />')

  return (
    <H
      {...storyblokEditable(blok)}
      key={blok._uid}
      {...jsonParams}
      dangerouslySetInnerHTML={{
        __html: content.replace(/\n/g, '<br />'),
      }}
    />
  )
}

export default Title
