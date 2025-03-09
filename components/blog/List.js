import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Box, Link } from '@chakra-ui/react'
import propsToJson from '../../hooks/propsToJson'
import example_post from '../../templates/post.json'

const List = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const posts = example_post

  return (
    <Box {...jsonParams.wrapper}>
      {posts.map((post) => (
        <Box {...storyblokEditable(blok)} key={post.id} {...jsonParams.post}>
          {blok.content.map((blok) => (
            <StoryblokComponent blok={blok} key={blok._uid} />
          ))}
          <Box mt="10px" {...jsonParams.link}>
            <Link href={`/blog/${post.slug}`}>Lire l`&apos;article</Link>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default List
