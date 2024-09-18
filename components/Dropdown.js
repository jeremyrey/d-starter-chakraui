import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
  Box,
  Flex,
} from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Dropdown = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

  return (
    <Menu {...storyblokEditable(blok)} {...jsonParams}>
      <MenuButton as={Link}>
        <Flex justify="center" align="center">
          <StoryblokComponent blok={blok.button[0]} key={blok.button[0]._uid} />
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {blok.content.map((content_item) => (
          <MenuItem key={content_item._uid} as={Box}>
            <StoryblokComponent blok={content_item} />
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default Dropdown
