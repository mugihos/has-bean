import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviews, removeReview } from '../actions/userpage'
import { useAuth0 } from '@auth0/auth0-react'
import { Radar } from 'react-chartjs-2'
import styles from './UserPage.module.scss'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default function UserPage() {
  const { getAccessTokenSilently, isAuthenticated, loginWithRedirect } =
    useAuth0()
  const dispatch = useDispatch()
  let reviews = useSelector((state) => state.reviews)

  useEffect(async () => {
    const token = await getAccessTokenSilently()
    if (isAuthenticated) {
      dispatch(fetchReviews(token))
    }
  }, [isAuthenticated])
  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1,
    scales: {
      r: {
        max: 5.0,
        min: 0,
        ticks: {
          stepSize: 1,
          showLabelBackdrop: false,
          color: '#d3d3d3',
        },
        grid: {
          color: '#8b4513',
          circular: true,
        },
        pointLabels: {
          color: '#cd853f',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        padding: 0,
        labels: {
          boxWidth: 200,
          boxHeight: 200,
          usePointStyle: true,
        },
      },
    },
  }

  const handleDelete = async (e, id) => {
    const token = await getAccessTokenSilently()
    dispatch(removeReview(id, token))
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <div>
        <h1 className={styles.heading}>I&apos;ve Bean</h1>
        {isAuthenticated == false ? (
          <div className={styles.notAuth}>
            <button onClick={handleSignIn}>Register | Login</button> to see your
            reviews.
          </div>
        ) : (
          <div className={styles.container}>
            <div>
              <Link to="/reviews/add">
                <h2 className={styles.addReview}>Click here to add review✍🏼</h2>
              </Link>
            </div>
            <section className={styles.cardList}>
              {reviews?.map((review) => {
                const data = {
                  type: 'radar',
                  labels: ['Flavour', 'Aroma', 'Acidity', 'Body', 'Aftertaste'],
                  datasets: [
                    {
                      data: [
                        review.flavour,
                        review.aroma,
                        review.acidity,
                        review.body,
                        review.aftertaste,
                      ],
                      backgroundColor: 'rgba(255, 99, 132, 0.2)',
                      borderColor: 'rgba(255, 99, 132, 1)',
                      borderWidth: 1,
                    },
                  ],
                }

                return (
                  <div key={review.id}>
                    <article className={styles.card}>
                      <div className={styles.cardHeader}>
                        <h1>{review.beansName}</h1>
                        <Link to={`/roasters/${review.roaster_id}`}>
                          <h2>{review.roasterName}</h2>
                        </Link>
                      </div>

                      <div className={styles.cardAuthor}>
                        <Radar data={data} options={options} width={'10%'} />
                      </div>
                      <div className={styles.authorName}>
                        <div className={styles.authorNamePrefix}>
                          <h3>Overall Rating: {review.rating}</h3>
                          <p>Notes: {review.comment}</p>
                        </div>
                      </div>
                      <div className={styles.tags}>
                        <ul className={styles.beanItem}>
                          {/* <li>Coffee Type: {review.coffee_type}</li> */}
                          <li className={styles.listItem}>
                            Cafe Name: {review.cafesName}
                          </li>
                          <li className={styles.listItem}>
                            Roasters Notes: {review.flavourDesc}
                          </li>
                        </ul>

                        <button
                          className={styles.buttonDesign}
                          onClick={(e) => {
                            handleDelete(e, Number(review.id))
                          }}
                        >
                          Delete Review
                        </button>
                      </div>
                    </article>
                  </div>
                )
              })}
            </section>
          </div>
        )}
      </div>
    </>
  )
}
