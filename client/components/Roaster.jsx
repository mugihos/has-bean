import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBeans } from '../actions/beans'
import styles from './Roaster.module.scss'

export default function Roaster() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBeans())
  }, [])
  const params = useParams()

  const roasterId = Number(params.id)
  const roasters = useSelector((state) => state.roasters)
  const beans = useSelector((state) => state.beans)
  const beansByRoaster = beans.filter((bean) => bean.roaster_id == roasterId)
  const searchRoasters = useSelector((state) => state.searchRoasters)
  const singleRoaster = roasters.find(
    (roaster) => Number(roaster.id) === roasterId
  )

  function mapRoasterCafes(query) {
    const filteredRoasters = searchRoasters.filter(({ roasterName }) =>
      roasterName.toLowerCase().includes(query.toLowerCase())
    )
    return filteredRoasters?.map((oneCafe) => {
      const { id, cafeName, address, lat, lng } = oneCafe
      const cafeUrl = 'https://www.google.com/search?q=google+' + cafeName
      const googleMap =
        'https://www.google.com/maps/search/' + cafeName + '/' + lat + ',' + lng
      return (
        <div key={id}>
          <article className={styles.card}>
            <header className={styles.cardHeader}>
              <p>Cafe</p>
              <div className={styles.cleanH2}>
                <h2>{cafeName}</h2>
              </div>
              <div className={styles.tags}>
                <div className={styles.tags}></div>
                <a className={styles.authorAvatar} href={cafeUrl}>
                  Website
                </a>{' '}
                <a className={styles.authorAvatar} href={googleMap}>
                  Map
                </a>{' '}
                <p>Address: {address}</p>
              </div>
            </header>
            <div className={styles.cardAuthor}></div>
          </article>
        </div>
      )
    })
  }

  return (
    <>
      <div>
        {singleRoaster && (
          <div className={styles.roasterContainer}>
            <h2 className={styles.heading}>{singleRoaster.name}</h2>
            <img
              src={singleRoaster.image_url}
              alt=""
              className={styles.roasterImg}
            />
            <p>Location: {singleRoaster.location}</p>
            <p className={styles.roasterDetail}>{singleRoaster.details}</p>
          </div>
        )}
        <section className={styles.cardList}>
          {beansByRoaster?.map((bean) => {
            return (
              <Link to={`/beans/${bean.id}`} key={bean.id}>
                <article className={styles.card}>
                  <header className={styles.cardHeader}>
                    <p>Beans / Blends</p>
                    <div className={styles.cleanH2}>
                      <h2>{bean.beanName}</h2>
                    </div>
                    <div className={styles.tags}></div>
                    <a className={styles.authorAvatar} href="#"></a>
                    <h2 className={styles.h2}></h2>
                    <li>REGION: {bean.region}</li>
                    <li>PROCESS: {bean.process}</li>
                    <li>RANGE OF ROAST: {bean.roast_degree}</li>
                    <li>FLAVOR: {bean.flavour_profile}</li>
                  </header>
                  <div className={styles.cardAuthor}></div>
                </article>
              </Link>
            )
          })}
        </section>
      </div>
      <section className={styles.cardList}>
        {mapRoasterCafes(singleRoaster?.name)}
      </section>
    </>
  )
}
