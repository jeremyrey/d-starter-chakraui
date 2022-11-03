import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function DynamicPage({ story }) {
  story = useStoryblokState(story, { customParent: 'http://localhost:3000'});

  return (
    <StoryblokComponent blok={story.content} />
  );
}

export async function getStaticProps(context) {
  let slug = context.params.slug
  let params = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
  };
}

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let params = {
    version: "draft", // or 'published'
  };
  let { data } = await storyblokApi.get('cdn/stories', params);

  const paths = data.stories.map((story) => ({
    params: { slug: story.slug },
  }));

  return { paths, fallback: 'blocking' };
}