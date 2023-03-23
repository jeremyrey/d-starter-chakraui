import propsToJson from './propsToJson'

export const useFormMessageBuilder = (blok_inputs) => {
  let message = 'Bonjour, <br>Voici les détails du message : <br><br>'
  let index = 0
  blok_inputs.forEach(function (_value, i) {
    const jsonParams = propsToJson(blok_inputs[i].props)
    if (jsonParams.type == 'file') {
      index = i
    } else {
      message += jsonParams.name_text + ' : ' + [i][1].value + '<br>'
    }
  })
  return { message, index }
}
