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
          <div>
            <button onClick={handleSignIn}>Register | Login</button> to see your
            reviews.
          </div>
        ) : (
          <div>
            <Link to="/reviews/add">
              <button>Add a review</button>
            </Link>
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
                      <header className={styles.cardHeader}>
                        <h1>{review.beansName}</h1>
                        <Link to={`/roasters/${review.roaster_id}`}>
                          <h2>{review.roasterName}</h2>
                        </Link>
                      </header>

                      <div className={styles.cardAuthor}>
                        <Radar data={data} options={options} />
                      </div>
                      <div className={styles.authorName}>
                        <div className={styles.authorNamePrefix}>
                          <h3>Overall Rating: {review.rating}</h3>
                          <p>Notes: {review.comment}</p>
                        </div>
                      </div>
                      <div className={styles.tags}>
                        <ul className={styles.beanItem}>
                          <li>Coffee Type: {review.coffee_type}</li>
                          <li>Cafe Name: {review.cafesName}</li>
                          <li>Roasters Notes: {review.flavourDesc}</li>
                          <li>
                            <button
                              onClick={(e) => {
                                handleDelete(e, review.id)
                              }}
                            >
                              Delete Review
                            </button>
                          </li>
                        </ul>
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
