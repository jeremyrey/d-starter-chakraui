import { getStoryblokApi } from "@storyblok/react";

const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_HOST;

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${post.params.slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const storyblokApi = getStoryblokApi();
  let params = {
    version: "draft",
    excluding_slugs: "settings"
  };
  let { data } = await storyblokApi.get('cdn/stories', params);

  const paths = data.stories.map((story) => ({
    params: { slug: story.slug },
  }));

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(paths);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;