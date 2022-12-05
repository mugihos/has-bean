import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

//this is where we have individual informaion of the roaster
export default function Bean() {
  const params = useParams()
  const beanId = Number(params.id)
  //this is where we access the global redux state to access the single roaster
  const roasters = useSelector((state) => state.roasters)
  const beans = useSelector((state) => state.beans)
  //select the single roaster by filter
  const singleBean = beans.find((beans) => beans.id === beanId)

  return (
    <>
      <div>
        {singleBean && (
          <div>
            <h2>{singleBean.beanName}</h2>
            <h3>Roaster: {singleBean.roasterName}</h3>
            <img src={singleBean.roaster_image} alt={singleBean.roasterName} width='200'/>
            <p>Region: {singleBean.region}</p>
            <p>Process: {singleBean.process}</p>
            <p>Roast: {singleBean.roast_degree}</p>
            <p>Flavour profile: {singleBean.flavour_profile}</p>
          </div>
        )}
      </div>
    </>
  )
}
