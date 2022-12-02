import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoasters } from '../actions/roasters'
import { fetchCafes } from '../actions/cafes'
import { fetchSearchRoasters } from '../actions/searchRoasters'

import MapShow from './MapShow'
import Search from './Search'
import SearchResult from './SearchResult'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRoasters())
    dispatch(fetchCafes())
    dispatch(fetchSearchRoasters())
  }, [])
  const [coOrds, setCoOrds] = useState({
    lng: '45.827483279857349',
    lat: '-45.827483279857349',
    roasters: [
      {
        id: 3,
        name: 'Global Byte Cafe',
        lng: '168.3469571',
        lat: '-46.4085996',
        address: '150 Dee Street, Invercargill 9810',
        city: 'Invercargill',
        roaster_id: 1,
      },
      {
        id: 4,
        name: 'Creel Tackle House & Cafe',
        lng: '175.8132631',
        lat: '-38.9934239',
        address: '189 Taupahi Road, Tūrangi 3334',
        city: 'Tūrangi',
        roaster_id: 1,
      },
    ],
  })
  // Function for onClick for markers on map
  function moreInfo(id) {
    console.log('New Cords ', id)
  }

  const [viewInfo, setViewInfo] = useState()
  useEffect(() => {
    setViewInfo(zoomAndCenterInfo(coOrds.roasters))
  }, [])

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
      const tileSize = 512 //px !!! Dunno how many tiles ffs
      const ratio = 30 // km/px at zoom level 1 for values at -40 latitude
      const zoomLevel =
        Math.log10(
          (tileSize * ratio) / Math.max(Math.abs(lngDist), Math.abs(latDist))
        ) / Math.log10(1.81)

      return {
        longitude: lngCentre,
        latitude: latCentre,
        zoom: zoomLevel,
      }
    } else {
      return {
        longitude: lngCentre,
        latitude: latCentre,
        zoom: 6,
      }
    }
  }

  return (
    <>
      <div>
        <Search />
      </div>
      <div>
        {viewInfo && (
          <MapShow coOrds={coOrds} moreInfo={moreInfo} viewInfo={viewInfo} />
        )}
      </div>
    </>
  )
}
