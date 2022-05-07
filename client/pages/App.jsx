import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Home from './Home'
import Coral101 from './Coral101'
import Fish101 from './Fish101'
import Bleaching101 from './Bleaching101'
import CoralID from '../components/CoralID'
import Footer from '../components/Footer'
import FishID from '../components/FishID'

function App() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coral-id-101' element={<Coral101 />} />
        <Route path='/coral-id/:id' element={<CoralID />} />
        <Route path='/fish-id-101' element={<Fish101 />} />
        <Route path='/bleaching-101' element={<Bleaching101 />} />
        <Route path='/fish-id/:id' element={<FishID />}></Route>
      </Routes>
      <br />
      <Footer />
    </>
  )
}

export default App
