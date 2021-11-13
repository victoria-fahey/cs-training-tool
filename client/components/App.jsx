import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Coral101 from './Coral101'
import Fish101 from './Fish101'
import Bleaching101 from './Bleaching101'

const App = () => {
  return (
    <>
      <Route path='/' component={Navbar} />
      <br></br>
      <br></br>
      <Route exact path='/' component={Home} />
      <Route path='/coral-id-101' component={Coral101} />
      <Route path='/fish-id-101' component={Fish101} />
      <Route path='/bleaching-101' component={Bleaching101} />
    </>
  )
}

export default App
