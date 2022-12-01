import { storyblokEditable } from "@storyblok/react";
import { Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Input, DrawerFooter, useDisclosure, Box } from '@chakra-ui/react'
import { useRef } from "react";

function propsToJson(props) {
  return JSON.parse(props)
}

const DrawerBlock = ({ blok }) => {
  let _props = '{}'
  let json_params = {}

  if (blok.props != '')
    _props = blok.props

  try {
    json_params = propsToJson(_props)
  }catch(e){}
  

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Box {...json_params}>
      <Button ref={btnRef} onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
};

export default DrawerBlock;
