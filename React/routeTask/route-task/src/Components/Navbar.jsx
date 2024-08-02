import React from 'react'
import { Link } from 'react-router-dom'
import '../LandingPage.css';
const Navbarr = ({ toggleMode }) => {
  return (
    <div className='navbar-page'>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/UserDetails">User Details</Link>
          </li>
        </ul>
      </div>

      <div>
        <nav className='navbar'>
          <div>
            <label className="switch">
              <input type="checkbox" onChange={toggleMode} />
              <span className="slider round" />
            </label>
          </div>
        </nav>
      </div>


    </div>
  )
}

export default Navbarr