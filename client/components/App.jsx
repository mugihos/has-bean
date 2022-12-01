import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styles from './App.module.scss'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Roasters from './Roasters'
import Roaster from './Roaster'
import NotFound from './NotFound'
import MapShow from './MapShow'

export default function App() {
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
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
    </div>
    <Footer />
    </>
  )
}
