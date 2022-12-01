import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

//this is where we have individual informaion of the roaster
export default function Roaster() {
  const params = useParams()
  const roasterId = Number(params.id)
  //this is where we access the global redux state to access the single roaster
  const roasters = useSelector((state) => state.roasters)

  //select the single roaster by filter
  const singleRoaster = roasters.find((roaster) => roaster.id === roasterId)

  return (
    <>
      <div>
        {singleRoaster && (
          <div>
            <h1>Single roaster</h1>
            <h3>{singleRoaster.name}</h3>
            <p>{singleRoaster.location}</p>
          </div>
        )}
      </div>
    </>
  )
}
