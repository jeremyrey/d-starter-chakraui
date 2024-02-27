import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import {
  Tabs as T,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
} from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Tabs = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

  return (
    <T {...storyblokEditable(blok)} {...jsonParams.root}>
      <TabList {...jsonParams.navs}>
        {blok.navs.map((navItem) => (
          <Tab key={'nav' + navItem._uid} {...jsonParams.navItems}>
            <StoryblokComponent blok={navItem} key={navItem._uid} />
          </Tab>
        ))}
      </TabList>

      <TabPanels {...jsonParams.panels}>
        {blok.panels.map((panelItem) => (
          <TabPanel key={'panel' + panelItem._uid} {...jsonParams.panelItems}>
            <StoryblokComponent blok={panelItem} key={panelItem._uid} />
          </TabPanel>
        ))}
      </TabPanels>
    </T>
  )
}

export default Tabs
