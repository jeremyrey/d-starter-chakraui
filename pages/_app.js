import { storyblokInit, apiPlugin } from '@storyblok/react'
import Flex from '../components/Flex'
import Container from '../components/Container'
import Page from '../components/Page'
import Box from '../components/Box'
import Text from '../components/Text'
import Image from '../components/Image'
import Link from '../components/Link'
import HStack from '../components/HStack'
import VStack from '../components/VStack'
import Button from '../components/Button'
import Heading from '../components/Heading'
import Center from '../components/Center'
import DrawerBlock from '../components/DrawerBlock'
import Icon from '../components/Icon'
import GoogleMaps from '../components/GoogleMaps'

const components = {
  container: Container,
  flex: Flex,
  box: Box,
  text: Text,
  page: Page,
  image: Image,
  link: Link,
  hstack: HStack,
  vstack: VStack,
  button: Button,
  heading: Heading,
  center: Center,
  drawerBlock: DrawerBlock,
  icon: Icon,
  googleMaps: GoogleMaps,
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
