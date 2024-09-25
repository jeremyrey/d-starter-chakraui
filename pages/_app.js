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
import Maps from '../components/Maps'
import Tabs from '../components/Tabs'
import Form from '../components/Form'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import Video from '../components/Video'
import Carousel from '../components/Carousel'
import Select from '../components/Select'
import Checkbox from '../components/Checkbox'
import Dropdown from '../components/Dropdown'
import Accordeon from '../components/Accordeon'

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
  googleMaps: Maps,
  tabs: Tabs,
  form: Form,
  input: Input,
  textarea: Textarea,
  video: Video,
  carousel: Carousel,
  select: Select,
  checkbox: Checkbox,
  dropdown: Dropdown,
  accordeon: Accordeon,
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
