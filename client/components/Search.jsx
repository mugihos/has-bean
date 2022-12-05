import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { setSearchResult } from '../actions/searchResult'

export default function Search() {
  const dispatch = useDispatch()
  const searchRoasters = useSelector((state) => state.searchRoasters)
  const roasters = useSelector((state) => state.roasters)
  const cafes = useSelector((state) => state.cafes)

  const cities = new Set()
  cafes.map((cafe) => cities.add(cafe.city))
  const citiesArr = Array.from(cities)

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

  const onSelectCity = (e) => {
    const city = e.target.value
    console.log('target', city)
    const cafes = searchRoasters.filter(
      (searchRoaster) => city == searchRoaster.city
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
            <option value="0">--Select the roaster--</option>
            {roasters.map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              )
            })}
          </select>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <select id="city" onChange={onSelectCity} name="city">
            <option value="0">--Select the city--</option>
            {citiesArr.map((city) => {
              return (
                <option key={city.id} value={city}>
                  {city}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </>
  )
}
