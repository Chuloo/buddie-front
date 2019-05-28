import React from "react"
import "./layout.css"
import Logo from "../../hackmamba-logo.png"

const Layout = ({ children }) => {
  return (
    <div className="app">
      <nav
        className="navbar has-text-weight-bold"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src={Logo}
              width="20"
              height="20"
              style={{ marginRight: "0.4em" }}
            />
            <h4 className="has-text-weight-bold is-size-5">ackmamba</h4>
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Learn</a>
            <a className="navbar-item">Build</a>
            <a className="navbar-item">Opportunities</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link navbar-item">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Blog</a>
                <a className="navbar-item">Stories</a>
              </div>
            </div>
            <a className="navbar-item">
              <span className="icon">
                <i className="far fa-user" />
              </span>
            </a>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}

export default Layout
