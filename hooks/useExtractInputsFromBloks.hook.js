const loopContent = (blok_inputs, value) => {
  if (value.content && value.content.length > 0) {
    value.content.forEach(function (value, i) {
      loopContent(blok_inputs, value)
    })
  } else {
    if (value.component === 'input' || value.component === 'textarea') {
      blok_inputs.push(value)
    }
  }
}

export const useExtractInputsFormBloks = (bloks) => {
  const blok_inputs = []
  bloks.forEach(function (value, i) {
    loopContent(blok_inputs, value)
  })
  return blok_inputs
}
