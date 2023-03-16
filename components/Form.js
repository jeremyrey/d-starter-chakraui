import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Box } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

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
  let isLoading = false

  const handleSubmit = async (e) => {
    e.preventDefault()

    isLoading = true

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
    <Box {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      <form onSubmit={handleSubmit}>
        {blok.content.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </form>
    </Box>
  )
}

export default Form
