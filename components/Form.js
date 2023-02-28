import { StoryblokComponent, storyblokEditable } from '@storyblok/react'
import { Box as B } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Form = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const blok_inputs = blok.content.filter(
      (component) =>
        component.component === 'input' || component.component === 'textarea'
    )
    const inputs = Object.entries(e.target)

    let message = 'Bonjour, \nVoici les détails du message : \n\n'
    blok_inputs.forEach(function (value, i) {
      const jsonParams = propsToJson(blok_inputs[i].props)
      message += jsonParams.name_text + ' : ' + inputs[i][1].value + '\n'
    })

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: 'jeremyrey@aplusc.fr',
        fullname: 'Jérémy',
        subject: 'Nouveau message',
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      console.log(error)
      return
    }
  }

  return (
    <B {...storyblokEditable(blok)} key={blok._uid} {...jsonParams}>
      <form onSubmit={handleSubmit}>
        {blok.content.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </form>
    </B>
  )
}

export default Form
