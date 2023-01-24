import { StoryblokComponent } from '@storyblok/react'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  Box,
} from '@chakra-ui/react'
import { useRef } from 'react'

function propsToJson(props) {
  return JSON.parse(props)
}

const DrawerBlock = ({ blok }) => {
  let _props = '{}'
  let json_params = {}

  if (blok.props != '') _props = blok.props

  try {
    json_params = propsToJson(_props)
  } catch (e) {}

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Box {...json_params}>
      <Box ref={btnRef} onClick={onOpen}>
        <StoryblokComponent blok={blok.button[0]} key={blok.button[0]._uid} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <StoryblokComponent blok={blok.menu[0]} key={blok.menu[0]._uid} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default DrawerBlock
