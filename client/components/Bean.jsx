import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Bean() {
  const params = useParams()
  const beanId = Number(params.id)
  const beans = useSelector((state) => state.beans)
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
