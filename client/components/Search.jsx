import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { setSearchResult } from '../actions/searchResult'

export default function Search() {
  const dispatch = useDispatch()
  const searchRoasters = useSelector((state) => state.searchRoasters)

  const handleOnSearch = (result) => {
    console.log(result)
  }

  //this is the dispatch for redux setting the selected result to state
  const handleOnSelect = (item) => {
    console.log('result', item)
    dispatch(setSearchResult(item))
  }

  return (
    <>
      <div>
        <div style={{ width: 300, margin: 10 }}>
          <label>Search</label>
          <ReactSearchAutocomplete
            items={searchRoasters}
            fuseOptions={{
              threshold: '0.4',
              keys: ['roasterName', 'cafeName'],
            }} // Search on both fields
            resultStringKeyName="cafeName" // String to display in the results
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            showIcon={false}
            placeholder='Search your favourite coffee'
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
              placeholderColor: '#e8ebce',
              clearIconMargin: '3px 8px 0 0',
              zIndex: 2,
            }}
          />
        </div>
      </div>
    </>
  )
}
