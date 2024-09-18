import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Box, Center } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'
import { UseFileInputFormatting } from '../hooks/useFileInputFormatting.hook'
import React, { useState } from 'react'
import { useExtractInputsFormBloks } from '../hooks/useExtractInputsFromBloks.hook'

const Form = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const [isLoading, setIsLoading] = useState(false)

  const blok_inputs = useExtractInputsFormBloks(blok.content)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    const inputs = Object.entries(e.target)

    let message = 'Bonjour, <br>Voici les détails du message : <br><br>'
    let file
    let fileInfo = {}
    blok_inputs.forEach(function (_value, i) {
      const jsonParams = propsToJson(blok_inputs[i].props)
      if (jsonParams.type == 'file') {
        file = inputs[i][1].files[0]
      } else if (jsonParams.type == 'checkbox') {
        message +=
          jsonParams.name_text +
          ' : ' +
          (inputs[i][1].checked ? 'Oui' : 'Non') +
          '<br>'
      } else {
        message += jsonParams.name_text + ' : ' + inputs[i][1].value + '<br>'
      }
    })
    if (file) {
      fileInfo = await UseFileInputFormatting(file)
    }
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: blok.contact,
        subject: 'Nouveau message depuis votre site',
        message: message,
        ...fileInfo,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      return
    }
  }

  return (
    <Box
      {...storyblokEditable(blok)}
      key={blok._uid}
      {...jsonParams}
      position="relative"
    >
      {isLoading && (
        <Center
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="hsl(0deg 0% 100% / 90%)"
          zIndex="2"
          key="center_1234"
        >
          Votre message est envoyé
        </Center>
      )}
      <form onSubmit={handleSubmit} key="form_1234">
        {blok.content.map((_blok) => (
          <StoryblokComponent blok={_blok} key={_blok._uid} />
        ))}
      </form>
    </Box>
  )
}

export default Form
