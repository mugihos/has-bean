import React, { useState } from 'react'
// import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Marker } from 'react-map-gl'

// export default function MapShow() {
//   return (
//     <div>
//       <h1>Hi</h1>
//     </div>
//   )
// }

export default function MapShow() {
  const [lng, setLng] = useState(54.378583894)
  const [lat, setlat] = useState(24.457684785)
  console.log(lng)

  return (
    <div id="map">
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZ3JlYXNlbGluZyIsImEiOiJjbGIzZHk2ZDMwM3RwM3VzdTZyaHFsOHVsIn0.95-vdWz0ALCMh9EdrPCMuA"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '15px',
          border: '2px solid red',
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={lng} latitude={lat} />
      </Map>
    </div>
  )
}
