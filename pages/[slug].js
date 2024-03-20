import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from '@storyblok/react'
import Meta from '../components/Meta'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Fonts from '../components/Fonts'
import CookieConsent from '../components/CookieConsent'
import Script from 'next/script'

export default function DynamicPage({ story, settings }) {
  story = useStoryblokState(story, {
    customParent: process.env.NEXT_PUBLIC_HOST,
  })

  if (!story || !settings) return <></>

  const themeConfig = extendTheme(JSON.parse(settings.content.theme_config))

  return (
    <ChakraProvider theme={themeConfig}>
      <Fonts link={themeConfig.font} />
      <Meta
        title={story.content.title}
        keywords={story.content.keywords}
        description={story.content.description}
        ogTitle={story.content.ogTitle}
        ogType={story.content.ogType}
        ogUrl={story.content.ogUrl}
        favicon={settings.content.favicon.filename}
      />
      <StoryblokComponent blok={story.content} />
      <CookieConsent />
      <Script strategy="lazyOnload" id="GA">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}',{
          page_path: window.location.pathname,
          });
         `}
      </Script>
    </ChakraProvider>
  )
}

export async function getStaticProps(context) {
  let params = {
    by_slugs: context.params.slug + ',' + 'settings',
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

  return {
    props: {
      story: typeof story != 'undefined' ? story : false,
      key: typeof story != 'undefined' ? story.id : false,
      settings: settings,
    },
  }
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi()
  let params = {
    version: 'draft',
    excluding_slugs: 'settings,home',
  }
  let { data } = await storyblokApi.get('cdn/stories', params)

  const paths = data.stories.map((story) => ({
    params: { slug: story.slug },
  }))

  return { paths, fallback: false }
}
