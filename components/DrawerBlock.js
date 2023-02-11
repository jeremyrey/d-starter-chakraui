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
import propsToJson from '../hooks/propsToJson'

const DrawerBlock = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Box {...jsonParams}>
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
