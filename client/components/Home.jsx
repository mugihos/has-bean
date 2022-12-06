import React, { useEffect, useState } from 'react'
import { setSearchResult } from '../actions/searchResult'
// import { useDispatch } from 'react-redux'
// import { fetchRoasters } from '../actions/roasters'
// import { fetchCafes } from '../actions/cafes'
// import { fetchSearchRoasters } from '../actions/searchRoasters'

import MapShow from './MapShow'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'
// import Result from './Result'

export default function Home() {
  //useSelector to use the result redux
  //will use hardcoded info for now to make this state work
  let selectedResult = useSelector((state) => state.searchResult)
  // Function for onClick for markers on map, this will be used once we start the search Roaster > all cafes related > click on one marker
  const dispatch = useDispatch()
  function moreInfo(item) {
    dispatch(setSearchResult([item]))
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
            ) : selectedResult.length >= 1 ? (
              <div className={styles.detail}>
                {selectedResult?.map(
                  ({ id, cafeName, address, roasterName }) => {
                    return (
                      <div key={id}>
                        <h2>{cafeName}</h2>
                        <p>{address}</p>
                        <p>Roaster: {roasterName}</p>
                      </div>
                    )
                  }
                )}
              </div>
            ) : (
              <div></div>
            )}
            <Link to={`/addNewCafe`}>
              <button>ADD NEW CAFE</button>
            </Link>
            <Link to="/addroaster">
              <button>Add Roaster</button>
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
