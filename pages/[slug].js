import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Meta from "../components/Meta";
import { useEffect, useState } from "react";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Fonts from "../components/Fonts";

export default function DynamicPage({ story, settings }) {

  const themeConfig = extendTheme(JSON.parse(settings.content.theme_config))

  story = useStoryblokState(story);

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
        ogImage={story.content.ogImage}
        favicon={settings.content.favicon.filename}
      />
      <StoryblokComponent blok={story.content} />
    </ChakraProvider>
  );
}

export async function getStaticProps(context) {
  let params = {
    by_slugs: context.params.slug + ',' + 'settings',
    version: 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get('cdn/stories/', params);

  console.log(data.stories.filter( truc => truc.slug != 'settings' )[0])

  return {
    props: {
      story: data ? data.stories.filter( truc => truc.slug != 'settings' )[0] : false,
      settings: data ? data.stories.filter( truc => truc.slug == 'settings' )[0] : false,
    },
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let params = {
    version: "published",
    excluding_slugs: "settings"
  };
  let { data } = await storyblokApi.get('cdn/stories', params);

  const paths = data.stories.map((story) => ({
    params: { slug: story.slug },
  }));

  return { paths, fallback: 'blocking' };
}