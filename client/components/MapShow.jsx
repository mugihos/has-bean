import React from 'react'
// import ReactMapGL from 'react-map-gl'
import { useSelector } from 'react-redux'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Marker } from 'react-map-gl'
import styles from './MapShow.module.scss'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'


export default function MapShow({ coOrds, moreInfo, viewInfo, imageIcon }) {
  const roasters = coOrds.roasters
  // const roasters = coOrds.roasters
  const searchResult = useSelector((state) => state.searchResult)
  return (
    <div id="map">
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZ3JlYXNlbGluZyIsImEiOiJjbGIzZHk2ZDMwM3RwM3VzdTZyaHFsOHVsIn0.95-vdWz0ALCMh9EdrPCMuA"
        container="map"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '15px',
          border: '5px solid white',
        }}
        initialViewState={{
          longitude: viewInfo?.longitude,
          latitude: viewInfo?.latitude,
          zoom: viewInfo?.zoom,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {roasters.map((roasters) => (
          <Marker
            key={roasters.id}
            longitude={roasters.lng}
            latitude={roasters.lat}
            onClick={() => moreInfo(roasters.id)}
          >
            <img src={imageIcon} alt="img_lost" className={styles.icon} />
          </Marker>
        ))}
        <Marker
          key={searchResult.id}
          longitude={searchResult?.lng || ''}
          latitude={searchResult?.lat || ''}
          onClick={() => moreInfo(searchResult.id)}
        />
      </Map>
    </div>
  )
}
