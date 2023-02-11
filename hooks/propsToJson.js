const propsToJson = (props) => {
  let tmpProps = '{}'
  let jsonParams = {}

  if (props != '') tmpProps = props

  try {
    jsonParams = JSON.parse(tmpProps)
  } catch (e) {}

  return jsonParams
}

export default propsToJson
