import { storyblokEditable } from '@storyblok/react'
import { Box as B } from '@chakra-ui/react'
import { useMemo } from 'react'
import { useLoadScript, GoogleMap } from '@react-google-maps/api'
import PropsToJson from '../hooks/props_to_json'

const Maps = ({ blok }) => {
  const jsonParams = PropsToJson(blok.props)
  const libraries = useMemo(() => ['places'], [])
  const mapCenter = useMemo(
    () => ({ lat: jsonParams.lat, lng: jsonParams.lng }),
    [jsonParams.lat, jsonParams.lng]
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries: libraries,
  })

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  )

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  console.log(jsonParams.lat)

  return (
    <B {...storyblokEditable(blok)} key={blok._uid}>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{
          width: jsonParams.width ?? '100%',
          height: jsonParams.height ?? '400px',
        }}
      />
    </B>
  )
}

export default Maps
