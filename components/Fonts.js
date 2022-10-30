import { Global } from '@emotion/react'

const Fonts = ({link}) => {

  console.log(link)

  return (
    <Global
    styles={
      link
    }
  />
  )

}

export default Fonts