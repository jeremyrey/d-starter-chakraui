import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react'
import Meta from '../../components/Meta'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Fonts from '../../components/Fonts'
import CookieConsent from '../../components/CookieConsent'
import GoogleScripts from '../../components/GoogleScripts'
import { BlogContext } from '../../contexts/index'

export default function DynamicPage({ story, post, settings }) {
  story = useStoryblokState(story, {
    customParent: process.env.NEXT_PUBLIC_HOST,
  })

  if (!story || !post || !settings) return <></>

  const themeConfig = extendTheme(JSON.parse(settings.content.theme_config))

  return (
    <ChakraProvider theme={themeConfig}>
      <Fonts link={themeConfig.font} />
      <Meta
        title={post.seo_title}
        keywords={''}
        description={post.seo_description}
        ogTitle={post.seo_title}
        ogType={'article'}
        ogUrl={''}
        favicon={settings.content.favicon.filename}
      />
      <BlogContext.Provider value={post}>
        <StoryblokComponent blok={story.content} />
      </BlogContext.Provider>
      <CookieConsent />
      <GoogleScripts />
    </ChakraProvider>
  )
}

export async function getStaticProps(context) {
  let params = {
    by_slugs: 'posts/post,' + 'settings',
    version: 'draft',
  }

  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get('cdn/stories/', params)

  let story = false
  let settings = false

  try {
    story = data.stories.filter((truc) => truc.slug != 'settings')[0]
    settings = data.stories.filter((truc) => truc.slug == 'settings')[0]
  } catch (error) {
    //console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }

  const posts_data = await fetch(
    `http://localhost:8888/wordpress/wp-json/wp/v2/posts?slug=${context.params.slug}`
  )
  const posts = await posts_data.json()
  const post = posts[0]

  return {
    props: {
      story: typeof story != 'undefined' ? story : false,
      post: typeof post != 'undefined' ? post : false,
      key: typeof story != 'undefined' ? story.id : false,
      settings: settings,
    },
  }
}

export async function getStaticPaths() {
  // Fetch all the slugs from WordPress
  const posts_data = await fetch(
    `http://localhost:8888/wordpress/wp-json/wp/v2/posts?author=${process.env.NEXT_PUBLIC_BLOG_AUTHOR_ID}`
  )
  const posts = await posts_data.json()

  // Create a path for each WordPress post
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}
