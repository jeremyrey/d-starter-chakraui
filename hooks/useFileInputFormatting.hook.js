async function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export const UseFileInputFormatting = async (file) => {
  let innerFile = ''
  await getBase64(file).then((data) => (innerFile = data))
  const filename = file.name
  const extension = file.type
  const fileBase64 = innerFile.split(',')[1]
  return { filename, extension, fileBase64 }
}
