import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import styles from './Search.module.scss'

export default function Search() {
  const roasters = useSelector((state) => state.roasters)
  console.log(roasters[0])

  const items = roasters

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  return (
    <>
      <div>
        <h1>Search Bar</h1>
        <div style={{ width: 200, margin: 20 }}>
          <h2>My custom searchbox!</h2>
          <div style={{ marginBottom: 20 }}>Search cafe/ro</div>
          <ReactSearchAutocomplete
            items={items}
            fuseOptions={{ keys: ["name", "description"] }} // Search on both fields
            resultStringKeyName="name" // String to display in the results
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            onClear={handleOnClear}
            showIcon={false}
            styling={{
              height: "34px",
              border: "1px solid darkgreen",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "lightgreen",
              color: "darkgreen",
              fontSize: "12px",
              fontFamily: "Courier",
              iconColor: "green",
              lineColor: "lightgreen",
              placeholderColor: "darkgreen",
              clearIconMargin: "3px 8px 0 0",
              zIndex: 2,
            }}
          />
          <div style={{ marginTop: 20 }}>This text will be covered!</div>
        </div>
      </div>
    </>
  )
}