import { AspectRatio } from '@chakra-ui/react'
import propsToJson from '../hooks/propsToJson'

const Video = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)

  return (
    <AspectRatio ratio={9 / 6} {...jsonParams}>
      <iframe
        src={blok.src.cached_url}
        allowFullScreen
        title={jsonParams.title}
      />
    </AspectRatio>
  )
}

export default Video
