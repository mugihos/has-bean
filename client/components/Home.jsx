import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoasters } from '../actions/roasters'
import { fetchCafes } from '../actions/cafes'
import { fetchSearchRoasters } from '../actions/searchRoasters'

import Map from './Map'
import Search from './Search'
import SearchResult from './SearchResult'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRoasters())
    dispatch(fetchCafes())
    dispatch(fetchSearchRoasters())
  }, [])

  return (
    <>
      <div className="#">
        <h1>HOME!!! TO SHOW MAP/SEARCH </h1>
        <Map />
        <Search />
      </div>
    </>
  )
}

