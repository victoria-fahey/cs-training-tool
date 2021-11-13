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
          <Link to={'/coral-id-101'}>Coral ID</Link>
          <Link to={'/fish-id-101'}>Fish ID</Link>
          <Link to={'/bleaching-101'}>Bleaching</Link>
          <a href="https://coresea.com/">COREsea</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
