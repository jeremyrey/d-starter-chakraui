import { storyblokEditable } from '@storyblok/react'
import { Box as B } from '@chakra-ui/react'
import { useMemo } from 'react'
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api'
import propsToJson from '../hooks/propsToJson'
import mapStyles from '../mapStyles.json'

const DEFAULT_WIDTH = '100%'
const DEFAULT_HEIGHT = '400px'
const DEFAULT_ZOOM = 14
const DEFAULT_API_KEY = 'AIzaSyDrZpqsORodNMj4gikLaF-mdH3uxojCOWE'
const LIBRAIRIES = []

const Maps = ({ blok }) => {
  const jsonParams = propsToJson(blok.props)
  const mapCenter = useMemo(
    () => ({ lat: jsonParams.lat, lng: jsonParams.lng }),
    [jsonParams.lat, jsonParams.lng]
  )

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: jsonParams.api_key ?? DEFAULT_API_KEY,
    libraries: LIBRAIRIES,
  })

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: false,
      scrollwheel: true,
      mapTypeControl: false,
      streetViewControl: false,
      styles: jsonParams.styles ?? mapStyles,
    }),
    [jsonParams.styles]
  )

  if (!isLoaded) {
    return <p>Loading...</p>
  }

  return (
    <B {...storyblokEditable(blok)} key={blok._uid}>
      <GoogleMap
        options={mapOptions}
        zoom={jsonParams.zoom ?? DEFAULT_ZOOM}
        center={mapCenter}
        mapContainerStyle={{
          width: jsonParams.width ?? DEFAULT_WIDTH,
          height: jsonParams.height ?? DEFAULT_HEIGHT,
        }}
      >
        {jsonParams.markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </B>
  )
}

export default Maps
