import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './App.module.scss'
import { useDispatch } from 'react-redux'
import { fetchRoasters } from '../actions/roasters'
import { fetchCafes } from '../actions/cafes'
import { fetchSearchRoasters } from '../actions/searchRoasters'
import { fetchBeans } from '../actions/beans'
import { fetchReviews } from '../actions/userpage'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Roasters from './Roasters'
import Roaster from './Roaster'
import NotFound from './NotFound'
import Beans from './Beans'
import Bean from './Bean'
import AddCafe from './AddCafe'
import OurStory from './OurStory'
import OurTeam from './OurTeam'
import ContactUs from './ContactUs'
import UserPage from './UserPage'
import AddRoaster from './AddRoaster'
import Drinks from './Drinks'
import Quiz from './Quiz'
import SubmitReview from './SubmitReview'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRoasters())
    dispatch(fetchCafes())
    dispatch(fetchSearchRoasters())
    dispatch(fetchBeans())
    dispatch(fetchReviews())
  }, [])

  return (
    <>
      <Header />
      <div className="pageWrapper">
        <div className={styles.base}>
          <Routes>
            {/* <Route path="/map" element={<MapShow />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/roasters" element={<Roasters />} />
            <Route path="/roasters/:id" element={<Roaster />} />
            <Route path="/beans" element={<Beans />} />
            <Route path="/beans/:id" element={<Bean />} />
            <Route path="/addNewCafe" element={<AddCafe />} />
            <Route path="/reviews" element={<UserPage />} />
            <Route path="/reviews/add" element={<SubmitReview />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/addroaster" element={<AddRoaster />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}
