import React, { useState, useEffect } from 'react'
// import ReactMapGL from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Marker } from 'react-map-gl'

import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

export default function MapShow({ coOrds, moreInfo }) {
  console.log(moreInfo)
  const roasters = coOrds.roasters
  const lng = coOrds.lng
  const lat = coOrds.lat
  console.log('refresh')
  return (
    <div id="map">
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZ3JlYXNlbGluZyIsImEiOiJjbGIzZHk2ZDMwM3RwM3VzdTZyaHFsOHVsIn0.95-vdWz0ALCMh9EdrPCMuA"
        container="map"
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
        {roasters.map((roasters) => (
          <Marker
            key={roasters.id}
            longitude={roasters.lng}
            latitude={roasters.lat}
            onClick={() => moreInfo(roasters.id)}
          />
        ))}
      </Map>
    </div>
  )
}
