import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react'
import Meta from '../../components/Meta'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
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
      <style>{`
        .article {
          line-height: 1.6;
        }
        .article a {
          text-decoration: none;
        }
        .article a:hover {
          border-bottom: 1px solid;
        }
        .article abbr {
          border-bottom: 1px dotted;
          cursor: help;
        }
        .article cite {
          font-style: italic;
        }
        .article hr {
          background: #e6e6e6;
          border: none;
          display: block;
          height: 1px;
          margin-bottom: 1.4em;
          margin-top: 1.4em;
        }
        .article img {
          vertical-align: text-bottom;
        }
        .article ins {
          background-color: lime;
          text-decoration: none;
        }
        .article mark {
          background-color: #ff0;
        }
        .article small {
          font-size: 0.8em;
        }
        .article strong {
          font-weight: 700;
        }
        .article sub,
        .article sup {
          font-size: 0.8em;
        }
        .article sub {
          vertical-align: sub;
        }
        .article sup {
          vertical-align: super;
        }
        .article p,
        .article dl,
        .article ol,
        .article ul,
        .article blockquote,
        .article pre,
        .article table {
          margin-bottom: 1.4em;
        }
        .article p:last-child,
        .article dl:last-child,
        .article ol:last-child,
        .article ul:last-child,
        .article blockquote:last-child,
        .article pre:last-child,
        .article table:last-child {
          margin-bottom: 0;
        }
        .article p:empty {
          display: none;
        }
        .article h1,
        .article h2,
        .article h3,
        .article h4,
        .article h5,
        .article h6 {
          font-weight: 700;
          line-height: 1.2;
        }
        .article h1:first-child,
        .article h2:first-child,
        .article h3:first-child,
        .article h4:first-child,
        .article h5:first-child,
        .article h6:first-child {
          margin-top: 0;
        }
        .article h1 {
          font-size: 2.4em;
          margin-bottom: 0.58333em;
          margin-top: 0.58333em;
          line-height: 1;
        }
        .article h2 {
          font-size: 1.6em;
          margin-bottom: 0.875em;
          margin-top: 1.75em;
          line-height: 1.1;
        }
        .article h3 {
          font-size: 1.3em;
          margin-bottom: 1.07692em;
          margin-top: 1.07692em;
        }
        .article h4 {
          font-size: 1.2em;
          margin-bottom: 1.16667em;
          margin-top: 1.16667em;
        }
        .article h5 {
          font-size: 1.1em;
          margin-bottom: 1.27273em;
          margin-top: 1.27273em;
        }
        .article h6 {
          font-size: 1em;
          margin-bottom: 1.4em;
          margin-top: 1.4em;
        }
        .article dd {
          margin-left: 1.4em;
        }
        .article ol,
        .article ul {
          list-style-position: outside;
          margin-left: 1.4em;
        }
        .article ol {
          list-style-type: decimal;
        }
        .article ol ol {
          list-style-type: lower-alpha;
        }
        .article ol ol ol {
          list-style-type: lower-roman;
        }
        .article ol ol ol ol {
          list-style-type: lower-greek;
        }
        .article ol ol ol ol ol {
          list-style-type: decimal;
        }
        .article ol ol ol ol ol ol {
          list-style-type: lower-alpha;
        }
        .article ul {
          list-style-type: disc;
        }
        .article ul ul {
          list-style-type: circle;
        }
        .article ul ul ul {
          list-style-type: square;
        }
        .article ul ul ul ul {
          list-style-type: circle;
        }
        .article ul ul ul ul ul {
          list-style-type: disc;
        }
        .article ul ul ul ul ul ul {
          list-style-type: circle;
        }
        .article blockquote {
          border-left: 4px solid #e6e6e6;
          padding: 0.6em 1.2em;
        }
        .article blockquote p {
          margin-bottom: 0;
        }
        .article code,
        .article kbd,
        .article samp,
        .article pre {
          -moz-osx-font-smoothing: auto;
          -webkit-font-smoothing: auto;
          background-color: #f2f2f2;
          color: #333;
          font-size: 0.9em;
        }
        .article code,
        .article kbd,
        .article samp {
          border-radius: 3px;
          line-height: 1.77778;
          padding: 0.1em 0.4em 0.2em;
          vertical-align: baseline;
        }
        .article pre {
          overflow: auto;
          padding: 1em 1.2em;
        }
        .article pre code {
          background: none;
          font-size: 1em;
          line-height: 1em;
        }
        .article figure {
          margin-bottom: 2.8em;
          text-align: center;
        }
        .article figure:first-child {
          margin-top: 0;
        }
        .article figure:last-child {
          margin-bottom: 0;
        }
        .article figcaption {
          font-size: 0.8em;
          margin-top: 0.875em;
        }
        .article table {
          width: 100%;
        }
        .article table pre {
          white-space: pre-wrap;
        }
        .article th,
        .article td {
          font-size: 1em;
          padding: 0.7em;
          border: 1px solid #e6e6e6;
          line-height: 1.4;
        }
        .article thead tr,
        .article tfoot tr {
          background-color: #f5f5f5;
        }
        .article thead th,
        .article thead td,
        .article tfoot th,
        .article tfoot td {
          font-size: 0.9em;
          padding: 0.77778em;
        }
        .article thead th code,
        .article thead td code,
        .article tfoot th code,
        .article tfoot td code {
          background-color: #fff;
        }
        .article tbody tr {
          background-color: #fff;
        }
      `}</style>
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
        <Box className="article">
          <StoryblokComponent blok={story.content} />
        </Box>
      </BlogContext.Provider>
      <CookieConsent />
      <GoogleScripts />
      <Fonts link={themeConfig.font} />
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
  }

  const posts_data = await fetch(
    `${process.env.BLOG_URL}/wp-json/wp/v2/posts?slug=${context.params.slug}&_embed`
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
    `${process.env.BLOG_URL}/wp-json/wp/v2/posts?author=${process.env.BLOG_AUTHOR_ID}`
  )
  const posts = await posts_data.json()

  // Create a path for each WordPress post
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false }
}
