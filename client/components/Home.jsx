import React, { useEffect, useState } from 'react'

// import { useDispatch } from 'react-redux'
// import { fetchRoasters } from '../actions/roasters'
// import { fetchCafes } from '../actions/cafes'
// import { fetchSearchRoasters } from '../actions/searchRoasters'

import MapShow from './MapShow'
import Search from './Search'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'
// import Result from './Result'

export default function Home() {
  //useSelector to use the result redux
  //will use hardcoded info for now to make this state work
  const selectedResult = useSelector((state) => state.searchResult)

  // Function for onClick for markers on map, this will be used once we start the search Roaster > all cafes related > click on one marker
  function moreInfo(id) {
    console.log('New Cords ', id)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.map}>
          {selectedResult && <MapShow moreInfo={moreInfo} />}
        </div>
        <div className={styles.right}>
          <h1>Find where your favourite coffee is served!</h1>
          <Search />
          <div>
            {selectedResult == '' ? (
              <div></div>
            ) : (
              <div className={styles.detail}>
                <h2>{selectedResult.cafeName}</h2>
                <p>{selectedResult.address}</p>
                <p>Roaster: {selectedResult.roasterName}</p>
              </div>
            )}
            <Link to={`/addNewCafe`}>
              <button>ADD NEW CAFE</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

//can change where selectedResult to a map function once we introduce search via roaster
{
  /* <MapShow coOrds={coOrds} moreInfo={moreInfo} viewInfo={viewInfo} /> */
}
