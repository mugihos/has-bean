import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import MapShow from './MapShow'
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
        <MapShow />
        <Search />
      </div>
    </>
  )
}
