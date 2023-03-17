import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Box, Center } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'
import React, { useState } from 'react'

const blok_inputs = []

const loopContent = (value) => {
  if (value.content && value.content.length > 0) {
    value.content.forEach(function (value, i) {
      loopContent(value)
    })
  } else {
    if (value.component === 'input' || value.component === 'textarea') {
      blok_inputs.push(value)
    }
  }
}

const Form = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(isLoading)

    setIsLoading(true)

    console.log(isLoading)

    blok.content.forEach(function (value, i) {
      loopContent(value)
    })

    const inputs = Object.entries(e.target)

    let message = 'Bonjour, <br>Voici les détails du message : <br><br>'
    blok_inputs.forEach(function (_value, i) {
      const jsonParams = propsToJson(blok_inputs[i].props)
      message += jsonParams.name_text + ' : ' + inputs[i][1].value + '<br>'
    })

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: blok.contact,
        subject: 'Nouveau message depuis votre site',
        message: message,
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
        >
          Votre message est envoyé
        </Center>
      )}
      <form onSubmit={handleSubmit}>
        {blok.content.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </form>
    </Box>
  )
}

export default Form
