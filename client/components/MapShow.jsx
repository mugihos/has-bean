import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Marker } from 'react-map-gl'
import styles from './MapShow.module.scss'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

export default function MapShow({ moreInfo }) {
  const searchResult = useSelector((state) => state.searchResult)
  let viewState =
    searchResult.length < 1
      ? {
          longitude: '173.3469571',
          latitude: '-41.4085996',
          zoom: 4.4,
        }
      : zoomAndCenterInfo(searchResult)

  const imageIcon = '/img/coffee.png'

  function zoomAndCenterInfo(coOrds) {
    // add if statement if there is length =1 for coOrds to set zoom
    // around the marker and cet centre
    //Find center of all points by finding half of max long and lat
    const latCoOrds = coOrds.map((coOrds) => coOrds.lat)
    const latCentre = (Math.max(...latCoOrds) + Math.min(...latCoOrds)) / 2

    const lngCoOrds = coOrds.map((coOrds) => coOrds.lng)
    const lngCentre = (Math.max(...lngCoOrds) + Math.min(...lngCoOrds)) / 2

    if (coOrds.length > 1) {
      const latRange = Math.abs(Math.max(...latCoOrds) - Math.min(...latCoOrds))
      const latDist = latRange * 111.32 // Distance in km

      const lngRange = Math.abs(Math.max(...lngCoOrds) - Math.min(...lngCoOrds))
      const lngDist = lngRange * 40075 * (Math.cos(latRange) / 360) // Dist in km

      // Find zoom by...
      const ratioTileSize = 26700 // km at zoom level 1 for values at -40 latitude
      const zoomLevel =
        Math.log10(
          ratioTileSize / Math.max(Math.abs(lngDist), Math.abs(latDist))
        ) / Math.log10(2) // Dimesnionless exponential equation to find zoom

      return {
        longitude: lngCentre,
        latitude: latCentre,
        zoom: zoomLevel,
      }
    } else {
      return {
        longitude: lngCentre,
        latitude: latCentre,
        zoom: 17,
      }
    }
  }

  return (
    <div id="map">
      <Map
        {...viewState}
        // onMove={onMove}
        mapboxAccessToken="pk.eyJ1IjoiZ3JlYXNlbGluZyIsImEiOiJjbGIzZHk2ZDMwM3RwM3VzdTZyaHFsOHVsIn0.95-vdWz0ALCMh9EdrPCMuA"
        container="map"
        style={{
          width: '100%',
          height: '500px',
          borderRadius: '15px',
          border: '5px solid white',
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <div>
          {searchResult?.map(
            ({
              address,
              cafeName,
              city,
              details,
              id,
              lat,
              lng,
              location,
              roasterId,
              roasterName,
            }) => {
              return (
                <Marker
                  key={id}
                  longitude={lng || ''}
                  latitude={lat || ''}
                  onClick={() =>
                    moreInfo({
                      address,
                      cafeName,
                      city,
                      details,
                      id,
                      lat,
                      lng,
                      location,
                      roasterId,
                      roasterName,
                    })
                  }
                >
                  <img src={imageIcon} alt="img_lost" className={styles.icon} />
                </Marker>
              )
            }
          )}
        </div>
      </Map>
    </div>
  )
}
