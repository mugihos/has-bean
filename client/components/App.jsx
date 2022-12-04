import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './App.module.scss'
import { useDispatch } from 'react-redux'
import { fetchRoasters } from '../actions/roasters'
import { fetchCafes } from '../actions/cafes'
import { fetchSearchRoasters } from '../actions/searchRoasters'
import { fetchBeans } from '../actions/beans'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Roasters from './Roasters'
import Roaster from './Roaster'
import NotFound from './NotFound'
import Beans from './Beans'
import AddCafe from './AddCafe'
import OurStory from './OurStory'
import OurTeam from './OurTeam'
import ContactUs from './ContactUs'
import IveBean from './IveBean'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRoasters())
    dispatch(fetchCafes())
    dispatch(fetchSearchRoasters())
    dispatch(fetchBeans())
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
            <Route path="/beans" element={<Beans />} />
            <Route path="/addNewCafe" element={<AddCafe />} />
            <Route path="/ivebeen" element={<IveBean />} />
            <Route path="/roasters/:id" element={<Roaster />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  )
}
