import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MapShow from './MapShow'
import Search from './Search'
import SearchResult from './SearchResult'

export default function Home() {
  const [coOrds, setCoOrds] = useState({
    lng: '45.827483279857349',
    lat: '-45.827483279857349',
    roasters: [
      {
        id: 1,
        name: 'Thunderbird Cafe',
        lng: '174.7766539',
        lat: '-41.2835619',
        address: '154 Featherston Street, CBD, Wellington 6011',
        city: 'Wellington',
        roaster_id: 1,
      },
      {
        id: 2,
        name: 'Daily Daily Coffeemakers',
        lng: '174.7630935',
        lat: '-36.8582608',
        address: '452 Karangahape Road, Auckland CBD, Auckland 1010',
        city: 'Auckland',
        roaster_id: 1,
      },
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
  function moreInfo(id) {
    console.log('New Cords ', id)
  }

  return (
    <>
      <div>

        <Search />
      </div>
      <div>
        <MapShow coOrds={coOrds} moreInfo={moreInfo} />
      </div>
    </>
  )
}
