import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { setSearchResult } from '../actions/searchResult'

export default function Search() {
  const dispatch = useDispatch()
  const searchRoasters = useSelector((state) => state.searchRoasters)
  const searchResult = useSelector((state) => state.searchResult)
  // const roasters = useSelector((state) => state.roasters)
  // const cafes = useSelector((state) => state.cafes)

  console.log('searchResult', searchResult)
  console.log('searchRoaster in Search.jsx', searchRoasters)

  const handleOnSearch = (string, results) => {
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    console.log(result, 'onHover result')
  }
  //this is the dispatch for redux setting the selected result to state
  const handleOnSelect = (item) => {
    console.log(item, 'onSelect item')
    dispatch(setSearchResult(item))
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const handleOnClear = () => {
    console.log('Cleared')
  }

  return (
    <>
      <div>
        <div style={{ width: 200, margin: 10 }}>
          <label>Search</label>
          <ReactSearchAutocomplete
            items={searchRoasters}
            fuseOptions={{
              threshold: '0.4',
              keys: ['roasterName', 'cafeName'],
            }} // Search on both fields
            resultStringKeyName="cafeName" // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            showIcon={false}
            styling={{
              height: '34px',
              border: '1px solid darkgreen',
              borderRadius: '4px',
              backgroundColor: 'white',
              boxShadow: 'none',
              hoverBackgroundColor: 'lightgreen',
              color: 'darkgreen',
              fontSize: '12px',
              fontFamily: 'Courier',
              iconColor: 'green',
              lineColor: 'lightgreen',
              placeholderColor: 'darkgreen',
              clearIconMargin: '3px 8px 0 0',
              zIndex: 2,
            }}
          />
        </div>
      </div>
    </>
  )
}
