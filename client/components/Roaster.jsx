import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBeans } from '../actions/beans'
import styles from './Beans.module.scss'

//this is where we have individual informaion of the roaster
export default function Roaster() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBeans())
  }, [])
  const params = useParams()

  const roasterId = Number(params.id)
  //this is where we access the global redux state to access the single roaster
  const roasters = useSelector((state) => state.roasters)
  const beans = useSelector((state) => state.beans)
  const beansByRoaster = beans.filter((bean) => bean.roaster_id == roasterId)
  const searchRoasters = useSelector((state) => state.searchRoasters)
  //select the single roaster by filter
  const singleRoaster = roasters.find((roaster) => roaster.id === roasterId)

  function mapRoasterCafes(query) {
    const filteredRoasters = searchRoasters.filter(({ roasterName }) =>
      roasterName.toLowerCase().includes(query.toLowerCase())
    )
    return filteredRoasters?.map((oneCafe) => {
      const { id, cafeName, address } = oneCafe
      return (
        <div key={id}>
          <ul>
            <h2>{cafeName}</h2>
            <p>{address}</p>
          </ul>
        </div>
      )
    })
  }

  return (
    <>
      <div>
        {singleRoaster && (
          <div>
            <h2>Roastery {singleRoaster.name}</h2>
            <img src={singleRoaster.image_url} alt="" />
            <p>Location: {singleRoaster.location}</p>
            <p>{singleRoaster.details}</p>
          </div>
        )}
        {beansByRoaster?.map((bean) => {
          return (
            <Link to={`/beans/${bean.id}`} key={bean.id}>
              <div className={styles.beanItem}>
                <h2 className={styles.h2}>{bean.beanName}</h2>
                <li>REGION: {bean.region}</li>
                <li>PROCESS: {bean.process}</li>
                <li>RANGE OF ROAST: {bean.roast_degree}</li>
                <li>FLAVOR: {bean.flavour_profile}</li>
                <li>THE ROASTER: {bean.roasterName}</li>
              </div>
            </Link>
          )
        })}
      </div>
      {mapRoasterCafes(singleRoaster?.name)}
    </>
  )
}
