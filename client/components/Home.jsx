import React from 'react'
import { setSearchResult } from '../actions/searchResult'
import { IfAuthenticated } from './Authenticated'

import MapShow from './MapShow'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

export default function Home() {
  let selectedResult = useSelector((state) => state.searchResult)
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
                  ({ id, cafeName, address, roasterName, roasterId }) => {
                    return (
                      <div key={id}>
                        <h2 id="cafeNameClick" className={styles.head}>
                          {cafeName}
                        </h2>
                        <p>{address}</p>
                        <Link to={`/roasters/${roasterId}`}>
                          <p>View Roaster: {roasterName}</p>
                        </Link>
                      </div>
                    )
                  }
                )}
              </div>
            ) : (
              <div></div>
            )}
            <IfAuthenticated>
              <Link to={`/addNewCafe`}>
                <button>Add New Cafe</button>
              </Link>
              <Link to="/addroaster">
                <button>Add Roaster</button>
              </Link>
            </IfAuthenticated>
          </div>
        </div>
      </div>
    </>
  )
}
