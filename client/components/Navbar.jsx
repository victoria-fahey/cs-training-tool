import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo">
          <img src="/images/COREsea_logo_white.png"/>
        </div>
        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          {/* <!-- NAVIGATION MENUS --> */}
          <div className="menu">
            <a href="/">Home</a>
            <a href="/">Coral ID</a>
            <a href="/">Fish ID</a>
            <a href="/">Bleaching</a>
            <a href="https://coresea.com/">COREsea</a>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
