import React from 'react'
import { useSelector } from 'react-redux'
import { ReactSearchAutocomplete } from "react-search-autocomplete";


export default function Search() {
  const searchRoasters = useSelector((state) => state.searchRoasters)
  const roasters = useSelector((state) => state.roasters)
  const cafes = useSelector((state) => state.cafes)
  const simpleArray = [{name: 1},{name: 2}]
  // const roastersName = roasters.map((data) => data.name)
  // const cafesName = cafes.map((data) => data.name)
  // console.log('roastersName', roastersName);

  // console.log('searchRoasters', searchRoasters);
  
  const items = searchRoasters.concat(cafes)

   console.log('items', items)
  //console.log('cafes', cafes)
  // console.log('roasters', roasters)

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
          <h2>Search</h2>
          <ReactSearchAutocomplete
            items={cafes}
            // fuseOptions={{ keys: ["name"]}} // Search on both fields
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