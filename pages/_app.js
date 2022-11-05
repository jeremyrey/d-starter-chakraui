import { storyblokInit, apiPlugin } from "@storyblok/react";
import Flex from "../components/Flex";
import Container from "../components/Container";
import Page from "../components/Page";
import Box from "../components/Box";
import Text from "../components/Text";
import Image from "../components/Image";
import Link from "../components/Link";
import HStack from "../components/HStack";
import { ChakraProvider } from '@chakra-ui/react'
import Button from "../components/Button";
import Heading from "../components/Heading";
import { getStoryblokApi } from "@storyblok/react";
import { extendTheme } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import Center from "../components/Center";
import Fonts from "../components/Fonts";

const components = {
  container: Container,
  flex: Flex,
  box: Box,
  text: Text,
  page: Page,
  image: Image,
  link: Link,
  hstack: HStack,
  button: Button,
  heading: Heading,
  center: Center
};

storyblokInit({
  accessToken: "bqQwMVKsE6fFBmHiOhZ09Qtt",
  use: [apiPlugin],
  components,
});

async function getTheme() {
  let slug = "settings"
  let params = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, params);

  return JSON.parse(data.story.content.theme_config)
}

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    getTheme().then((value) => {
      setTheme(extendTheme(value))
      setLoaded(true)
    }
    )
  }, [])

  return (
    <>
    { loaded &&
    (
      <ChakraProvider theme={theme}>
        <Fonts link={theme.font} />
        <Component {...pageProps} />
      </ChakraProvider>
    )
      
    }
    </>
  )
    
  
}

export default MyApp;
