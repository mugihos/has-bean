import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Roasters from './Roasters'
import Roaster from './Roaster'


export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/roasters" element={<Roasters />} />
      <Route path="/roasters/:id" element={<Roaster />} />
    </Routes>
    <Footer />
    </>
  )
}

