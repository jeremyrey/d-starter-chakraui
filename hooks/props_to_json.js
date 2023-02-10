function propsToJson(props) {
  return JSON.parse(props)
}

const PropsToJson = (props) => {
  let tmpProps = '{}'
  let jsonParams = {}

  if (props != '') tmpProps = props

  try {
    jsonParams = propsToJson(tmpProps)
  } catch (e) {}

  return jsonParams
}

export default PropsToJson
