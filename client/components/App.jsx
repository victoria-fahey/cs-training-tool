import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'

const App = () => {
  return (
    <>
      <Route path = '/' component={Navbar} />
      <br></br>
      <Route exact path = '/' component={Home} />
    </>
  )
}

export default App
