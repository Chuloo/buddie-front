import React, { useState } from "react"
import { Link } from "gatsby"
import "./layout.css"
import Logo from "../../assets/artwork-logo.svg"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    console.log(showNav)
    setShowNav(!showNav)
  }

  return (
    <div>
      <Helmet>
        <title>Buddie | Complete Goals Together</title>
      </Helmet>
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
                width="50"
                height="50"
                style={{ marginRight: "0.4em" }}
              />
              <h4 className="has-text-weight-bold is-size-5">
                <Link to="/">Buddie</Link>
              </h4>
            </a>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="nav-collapse-menu"
              onClick={() => toggleNav()}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div
            id="nav-collapse-menu"
            className={`navbar-menu ${showNav ? "is-active" : ""}`}
          >
            <div className="navbar-end">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/guidelines">
                Guidelines
              </Link>
            </div>
          </div>
        </nav>
        {children}

        {/* Footer */}
      </div>
      <footer className="footer">
        <div className="columns width">
          <div className="column is-4">
            <p className="footer_title has-text-weight-bold">Buddie</p>
            <p className="footer_title_text" style={{ opacity: "0.8" }}>
              Here lies a community of people interested in supporting each
              other, in going all the way to become better.
            </p>
          </div>
          <div className="column is-2 is-offset-3">
            <p className="footer_menu is-uppercase has-text-weight-bold">
              menu
            </p>
            {/* <p className="footer_menu_item">
              <a>Learn</a>
            </p> */}
            {/* <p className="footer_menu_item">About</p> */}
            {/* <p className="footer_menu_item">Contact</p> */}
            <p className="footer-menu-item">
              <Link to="/guidelines">Guidelines</Link>
            </p>
            {/* <p className="footer_menu_item">Blog</p> */}
          </div>
          <div className="column is-2 is-offset-1">
            <p className="footer_follow is-uppercase has-text-weight-bold">
              Follow us
            </p>
            <p className="footer_follow_item">
              <OutboundLink
                href="https://twitter.com/buddie_io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </OutboundLink>
            </p>
            {/* <p className="footer_follow_item">Facebook</p> */}
            {/* <p className="footer_follow_item">Instagram</p> */}
          </div>
        </div>
        <div className="columns width">
          <div className="column is-6 has-text-weight-bold">
            <OutboundLink href="https://subscribe.buddie.io/" target="_blank">
              Subscribe to receive productivity tips, and any cool stuff we
              share
            </OutboundLink>
          </div>
          <div className="column is-6 is-offset-2">
            &copy;2020 Buddy All rights reserved
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
