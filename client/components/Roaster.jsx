import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

//this is where we have individual informaion of the roaster
export default function Roaster() {
  const params = useParams()
  const roasterId = params.id
  //this is where we access the global redux state to access the single roaster
  const roasters = useSelector((state) => state.roasters)

  //select the single roaster by filter
  const singleRoaster = roasters.find((roaster) => roasters.id === roasterId)

  return (
    <>
      <div>
        <h1>{singleRoaster.name}</h1>
        <h3>{singleRoaster.location}</h3>
        <p>{singleRoaster.details}</p>
      </div>
    </>
  )
}
