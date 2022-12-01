import React, { useState, useEffect } from 'react'
import { getRoasters } from '../apis/roasters'
import styles from './Roasters.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoasters } from '../actions/roasters'

export default function Roasters() {
  const dispatch = useDispatch()
  let roasters = useSelector((state) => state.roasters)

  useEffect(() => {
    dispatch(fetchRoasters())
  }, [])

  return (
    <>
      <div>
        <h2>Welcome Home</h2>
        {console.log(roasters)}
        {/* <img src="img/foxathome.jpeg" alt="Fox img" /> */}
        {/* <Link to="/forest">Go hunting your fox</Link> */}
      </div>
    </>
  )
}
