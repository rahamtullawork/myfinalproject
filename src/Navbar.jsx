
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const navbarRef = useRef(null)

  const token = localStorage.getItem("token")

  const handleNavClick = () => {
    if (window.innerWidth < 992 && navbarRef.current) {
      const bsCollapse = window.bootstrap.Collapse.getInstance(
        navbarRef.current
      )

      if (bsCollapse) {
        bsCollapse.hide()
      }
    }
  }

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid custom-container">

        <NavLink className="navbar-brand" to="/" onClick={handleNavClick}>
          <span className="brand-icon">✦</span>
          Nova<span className="brand-highlight">UI</span>
        </NavLink>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
          ref={navbarRef}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={handleNavClick}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login" onClick={handleNavClick}>
                Login
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link register-btn" to="/register" onClick={handleNavClick}>
                Get Started →
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}
