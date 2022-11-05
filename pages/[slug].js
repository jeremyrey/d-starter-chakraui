import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import Meta from "../components/Meta";

export default function DynamicPage({ story }) {
  story = useStoryblokState(story, { customParent: 'http://localhost:3000'});
  console.log(story)

  return (
    <>
      <Meta 
        title={story.content.title}
        keywords={story.content.keywords}
        description={story.content.description}
        ogTitle={story.content.ogTitle}
        ogType={story.content.ogType}
        ogUrl={story.content.ogUrl}
        ogImage={story.content.ogImage}
      />
      <StoryblokComponent blok={story.content} />
    </>
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