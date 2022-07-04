import React from 'react'
import {Link} from  'react-router-dom'
import "../App.css"

export const Header = () => {
  return (
    <>
    
    <nav className="navbar">
            <div className="logo">
              <Link to = "/">
                <h2>Logo</h2>
              </Link>
            </div>
            <div className="nav">
                <ul className="ulbar">
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}
