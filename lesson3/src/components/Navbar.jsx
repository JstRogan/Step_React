import { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">Auth Panel</div>
        <div className="navbar-links">
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
            }
          >
            Sign in
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? 'navbar-link navbar-link-active' : 'navbar-link'
            }
          >
            Sign up
          </NavLink>
        </div>
      </nav>
    )
  }
}

export default Navbar
