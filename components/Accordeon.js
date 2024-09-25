import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import {
  Accordion as A,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Accordeon = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const jsonIconParams = propsToJson(blok.icon_props)

  return (
    <A allowMultiple {...storyblokEditable(blok)} {...jsonParams}>
      {blok.navs.map((navItem, i) => (
        <AccordionItem key={navItem._uid}>
          <AccordionButton>
            <StoryblokComponent blok={navItem} />
            <AccordionIcon {...jsonIconParams} />
          </AccordionButton>
          <AccordionPanel>
            <StoryblokComponent blok={blok.panels[i]} key={navItem._uid} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </A>
  )
}

export default Accordeon
