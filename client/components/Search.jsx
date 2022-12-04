import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { setSearchResult } from '../actions/searchResult'

export default function Search() {
  const dispatch = useDispatch()
  const searchRoasters = useSelector((state) => state.searchRoasters)
  let roasters = useSelector((state) => state.roasters)

  //this is the dispatch for redux setting the selected result to state
  const handleOnSelect = (item) => {
    dispatch(setSearchResult(item))
  }
  const onSelectRoaster = (e) => {
    const id = e.target.value
    const cafes = searchRoasters.filter(
      (searchRoaster) => id == searchRoaster.roasterId
    )
    dispatch(setSearchResult(cafes))
  }
  return (
    <>
      <div>
        <div style={{ width: 250, margin: 10 }}>
          <label>Search</label>
          <ReactSearchAutocomplete
            items={searchRoasters}
            fuseOptions={{
              threshold: '0.3',
              keys: ['cafeName', 'roasterName'],
            }}
            resultStringKeyName="cafeName" // String to display in the results
            onSelect={handleOnSelect}
            showIcon={false}
            placeholder="Search your favourite coffee"
            styling={{
              height: '34px',
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
        <div>
          <label htmlFor="id">Roaster:</label>
          <select id="id" onChange={onSelectRoaster} name="id">
            <option value="0">--Please select--</option>
            {roasters.map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </>
  )
}
