import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { setSearchResult } from '../actions/searchResult'
import styles from './Home.module.scss'

export default function Search() {
  const dispatch = useDispatch()
  const searchRoasters = useSelector((state) => state.searchRoasters)
  const roasters = useSelector((state) => state.roasters)
  const cafes = useSelector((state) => state.cafes)

  const cities = new Set()
  cafes.map((cafe) => cities.add(cafe.city))
  const citiesArr = Array.from(cities)

  const handleOnSelect = (item) => {
    dispatch(setSearchResult([item]))
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
    const cafes = searchRoasters.filter(
      (searchRoaster) => city == searchRoaster.city
    )
    dispatch(setSearchResult(cafes))
  }

  return (
    <>
      <div>
        <div>
          <label htmlFor="search" className={styles.search}>
            Search
          </label>
          <ReactSearchAutocomplete
            items={searchRoasters}
            fuseOptions={{
              threshold: '0.3',
              keys: ['cafeName', 'roasterName'],
            }}
            resultStringKeyName="cafeName"
            onSelect={handleOnSelect}
            showIcon={false}
            placeholder="Search your favourite coffee"
            styling={{
              height: '40px',
              borderColor: '#2f2c28',
              borderRadius: '4px',
              backgroundColor: 'white',
              boxShadow: 'none',
              hoverBackgroundColor: '#cd853f',
              color: '#2f2c28',
              fontSize: '14px',
              fontFamily: 'Source Serif Pro',
              iconColor: '#8b4513',
              lineColor: '#8b4513',
              placeholderColor: '#8b4513',
              clearIconMargin: '3px 8px 0 0',
              zIndex: 2,
            }}
          />
        </div>
        <div className={styles.search}>
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
        <div className={styles.search}>
          <label htmlFor="city">City:</label>
          <select id="city" onChange={onSelectCity} name="city">
            <option value="0">--Select the city--</option>
            {citiesArr.map((city) => {
              return (
                <option key={city} value={city}>
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
