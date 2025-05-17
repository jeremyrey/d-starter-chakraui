import { Image } from '@chakra-ui/react'
import propsToJson from '../../hooks/propsToJson'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/index'

const Cover = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const post = useContext(BlogContext)

  return (
    <Image
      src={post._embedded['wp:featuredmedia'][0].source_url}
      alt={post._embedded['wp:featuredmedia'][0].alt_text}
      {...jsonParams}
    />
  )
}

export default Cover
