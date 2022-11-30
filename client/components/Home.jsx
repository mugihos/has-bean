import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Map from './Map'
import Search from './Search'
import SearchResult from './SearchResult'

export default function Home() {
  // const fruits = useSelector((state) => state.fruits)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch()
  // }, [])

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

