import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Box, Link } from '@chakra-ui/react'
import propsToJson from '../../hooks/propsToJson'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/index'

const List = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const posts = useContext(BlogContext)

  return (
    <Box {...jsonParams.wrapper}>
      {posts.map((post) => (
        <Box {...storyblokEditable(blok)} key={post.slug} {...jsonParams.post}>
          {blok.content.map((blok) => (
            <BlogContext.Provider value={post} key={blok._uid}>
              <StoryblokComponent blok={blok} />
            </BlogContext.Provider>
          ))}
          <Box mt="10px" {...jsonParams.link}>
            <Link href={`/posts/${post.slug}`}>Read more</Link>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default List
