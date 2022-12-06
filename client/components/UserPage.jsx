import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchReviews, removeReview } from '../actions/userpage'
import { Radar } from 'react-chartjs-2'
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
// import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
// import { useAuth0 } from '@auth0/auth0-react'

export default function UserPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate
  let reviews = useSelector((state) => state.reviews)
console.log(reviews, 'reviews');
  useEffect(() => {
    dispatch(fetchReviews())
  }, [])
  const options = {
    scales: {
      r: {
        max: 5.0,
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },
  }

  function handleDelete(e, id) {
    dispatch(removeReview(id))
    navigate('/review')
  }

  return (
    <>
      <div>
        <h1>I've Bean</h1>
        <Link to="/reviews/add">
          <button>Add a review</button>
        </Link>
        {reviews?.map((review) => {
          const data = {
            type: 'radar',
            labels: ['Flavour', 'Aroma', 'Acidity', 'Body', 'Aftertaste'],
            datasets: [
              {
                label: 'Flavour Profile',
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
              <div>
                <Radar data={data} options={options} />
              </div>
              <ul>
                <li>My comment: {review.comment}</li>
                <li>Overall Rating: {review.rating}</li>
                <li>Coffee Type: {review.coffee_type}</li>
                <li>Bean Name: {review.beansName}</li>
                <li>Cafe Name: {review.cafesName}</li>
                <li>Roasters Name: {review.roasterName}</li>
                <li>Roasters Notes: {review.flavourDesc}</li>
              </ul>
              <button
                onClick={(e) => {
                  handleDelete(e, review.id)
                }}
              >
                Delete comment
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}
