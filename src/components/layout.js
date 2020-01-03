import React from "react"
import "./layout.css"
import Logo from "../../hackmamba-logo.png"

const Layout = ({ children }) => {
  return (
    <div>
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
              <h4 className="has-text-weight-bold is-size-5">Buddy</h4>
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
              {/* <a className="navbar-item">Partner</a> */}
              {/* <a className="navbar-item">Build</a> */}
              {/* <a className="navbar-item">Opportunities</a> */}
              <a className="navbar-item">About</a>
              <a className="navbar-item">Contact</a>

              {/* <div className="navbar-item has-dropdown is-hoverable">
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
              </a> */}
            </div>
          </div>
        </nav>
        {children}

        {/* Footer */}
      </div>
      <footer className="footer">
        <div className="columns width">
          <div className="column is-4">
            <p className="footer_title has-text-weight-bold">Buddy</p>
            <p className="footer_title_text" style={{ opacity: "0.8" }}>
              Here lies a community of people interested in supporting each other, in going all the way to become better.
            </p>
          </div>
          <div className="column is-2 is-offset-3">
            <p className="footer_menu is-uppercase has-text-weight-bold">
              menu
            </p>
            <p className="footer_menu_item">
              <a>Learn</a>
            </p>
            <p className="footer_menu_item">About</p>
            <p className="footer_menu_item">Contact</p>
            <p className="footer_menu_item">Blog</p>
          </div>
          <div className="column is-2 is-offset-1">
            <p className="footer_follow is-uppercase has-text-weight-bold">
              Follow us
            </p>
            <p className="footer_follow_item">Twitter</p>
            <p className="footer_follow_item">Facebook</p>
            <p className="footer_follow_item">Instagram</p>
          </div>
        </div>
        <div className="columns width">
          <div className="column is-6">Enter email to subscribe</div>
          <div className="column is-6 is-offset-2">
            &copy;2019 Buddy All rights reserved
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
