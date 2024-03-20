import React from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import { Box, Button, Text, Flex } from '@chakra-ui/react'

const CookieConsent = (props) => {
  const [showConsent, setShowConsent] = React.useState(true)

  React.useEffect(() => {
    setShowConsent(hasCookie('localConsent'))
  }, [])

  const acceptCookie = () => {
    setShowConsent(true)
    setCookie('localConsent', 'true', {})
  }

  if (showConsent) {
    return null
  }

  return process.env.NEXT_PUBLIC_ACTIVATE_CONSENT == 0 ? (
    <Box
      pos="fixed"
      w="100%"
      zIndex={100}
      bg={'#FAFAFA'}
      p={6}
      bottom={0}
      left={0}
    >
      <Flex justifyContent={'center'} alignItems={'center'}>
        <Text mr={16}>
          Ce site utilise des cookies nécessaires à son bon fonctionnement qui
          ne peuvent pas être désactivés. En les acceptant vous autorisez des
          services tiers, vous acceptez le dépôt et la lecture de cookies et
          l&apos;utilisation de technologies de suivi nécessaires à leur bon
          fonctionnement.
        </Text>
        <Button
          bg="black"
          color={'white'}
          onClick={() => acceptCookie()}
          flex={'0 0 auto'}
        >
          Accepter
        </Button>
      </Flex>
    </Box>
  ) : (
    <></>
  )
}

export default CookieConsent
