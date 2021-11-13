import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/COREsea_logo_white.png"/>
        </div>
        <div className="menu">
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>Coral ID</Link>
          <Link to={'/'}>Fish ID</Link>
          <Link to={'/'}>Bleaching</Link>
          <a href="https://coresea.com/">COREsea</a>
          {/* <a href="/">Home</a> */}
          {/* <a href="/">Coral ID</a> */}
          {/* <a href="/">Fish ID</a> */}
          {/* <a href="/">Bleaching</a> */}
          {/* <a href="https://coresea.com/">COREsea</a> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
