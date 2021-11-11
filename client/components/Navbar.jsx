import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/COREsea_logo_white.png"/>
        </div>
        <div className="menu">
          <a href="/">Home</a>
          <a href="/">Coral ID</a>
          <a href="/">Fish ID</a>
          <a href="/">Bleaching</a>
          <a href="https://coresea.com/">COREsea</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
