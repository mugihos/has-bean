import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { getRoasters } from '../apis/roasters'
// import styles from './Roasters.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoasters } from '../actions/roasters'

export default function Roasters() {
  // const dispatch = useDispatch()
  let roasters = useSelector((state) => state.roasters)

  // useEffect(() => {
  //   dispatch(fetchRoasters())
  // }, [])

  if (!roasters) {
    return <div>Loading Roasters... ps. David is best</div>
  }

  const cities = new Set()
  roasters.map((roaster) =>
    roaster.location.split(',').map((location) => cities.add(location.trim()))
  )
  const locations = Array.from(cities)
  console.log(locations)
  // locations = ArrayFrom(locations)

  return (
    //   <>
    //     <div>
    //       <h2>Welcome Home</h2>
    //       <ul>
    //       {roasters?.map(({ name, id }) => (
    //         <Link to={${id}}>
    //         <li key={id}>{name}</li>
    //         </Link>
    //       ))}
    //       </ul>
    //       {/* <img src="img/foxathome.jpeg" alt="Fox img" /> */}
    //       {/* <Link to="/forest">Go hunting your fox</Link> */}
    //     </div>
    //     </>
    // )

    <div>
      <h2>Roasters</h2>
      <ul>
        {locations.map((location) => {
          return (
            <>
              {' '}
              <h3 key={location.id}>{location}</h3>
              {roasters
                ?.filter((roaster) => roaster.location.includes(location))
                .map((roaster) => {
                  return (
                    <div key={roaster.id}>
                      <Link to={`/roasters/${roaster.id}`}>
                        <li>{roaster.name}</li>
                      </Link>
                    </div>
                  )
                })}
            </>
          )
        })}
      </ul>
    </div>
  )
}
