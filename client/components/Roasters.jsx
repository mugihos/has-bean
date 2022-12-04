import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { getRoasters } from '../apis/roasters'
import styles from './Roasters.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoasters } from '../actions/roasters'

export default function Roasters() {
  const dispatch = useDispatch()
  let roasters = useSelector((state) => state.roasters)

  useEffect(() => {
    dispatch(fetchRoasters())
  }, [])

  if (!roasters) {
    return <div>David is best</div>
  }

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
      <h2>Welcome to Roasters</h2>
      <ul className={styles.ul}>
        {roasters?.map((roaster) => {
          return (
            <div key={roaster.id} className={styles.beanItem}>
              <Link to={`/roasters/${roaster.id}`}>
                <li>{roaster.name}</li>
                <img
                  className={styles.roasterImg}
                  src={roaster.image_url}
                  alt={roaster.name}
                />
              </Link>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
