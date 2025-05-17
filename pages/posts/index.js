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

export default function Index({ story, settings, posts }) {
  story = useStoryblokState(story, {
    customParent: process.env.NEXT_PUBLIC_HOST,
  })

  if (!story || !settings) return <></>

  const themeConfig = extendTheme(JSON.parse(settings.content.theme_config))

  return (
    <ChakraProvider theme={themeConfig}>
      <Meta
        title={story.content.title}
        keywords={story.content.keywords}
        description={story.content.description}
        ogTitle={story.content.ogTitle}
        ogType={story.content.ogType}
        ogUrl={story.content.ogUrl}
        favicon={settings.content.favicon.filename}
      />
      <BlogContext.Provider value={posts}>
        <StoryblokComponent blok={story.content} />
      </BlogContext.Provider>
      <CookieConsent />
      <GoogleScripts />
      <Fonts link={themeConfig.font} />
    </ChakraProvider>
  )
}

export async function getStaticProps(context) {
  if (process.env.BLOG_URL == undefined) return { props: {} }

  let params = {
    by_slugs: 'posts/index,' + 'settings',
    version: 'draft',
  }

  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get('cdn/stories/', params)

  let story = false
  let settings = false
  let posts = []

  try {
    story = data.stories.filter((truc) => truc.slug != 'settings')[0]
    settings = data.stories.filter((truc) => truc.slug == 'settings')[0]
    const posts_data = await fetch(
      `${process.env.BLOG_URL}/wp-json/wp/v2/posts?author=${process.env.BLOG_AUTHOR_ID}`
    )
    posts = await posts_data.json()
  } catch (error) {
    //console.error(error)
  }

  return {
    props: {
      story: typeof story != 'undefined' ? story : false,
      key: typeof story != 'undefined' ? story.id : false,
      posts: posts,
      settings: settings,
    },
  }
}
