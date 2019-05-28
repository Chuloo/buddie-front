import React from "react"
import Layout from "../components/layout"
import "./index.css"
import Art from "../../assets/Artwork@1x.png"

const Home = () => {
  return (
    <Layout>
      <div className="bucket">
        <div className="section splash_page width">
          <div className="columns">
            <div className="column call-to-action is-two-fifths">
              <h1 className="header__title is-size-1 has-text-weight-bold">
                Learn. Build. Opportunities.
              </h1>
              <p className="header__subtitle">
                Hackmamba is a community of enthusiasts learning about
                technology, building along the way, and getting access to
                relevant opportunities.
              </p>
              <div className="action">
                <button className="button cta_button is-primary is-large">
                  <h1 className="is-size-6">Get early access</h1>
                </button>
              </div>
            </div>
            <div className="column illustration">
              <img
                src={Art}
                alt="Illustration"
                width="500px"
                className="is-centered"
              />
            </div>
          </div>
        </div>
        <div className="width splash_details columns">
          <div className="column columns is-6 is-offset-6">
            <div className="column">
              <h1 className="has-text-weight-bold is-size-7 header__title">
                Learn Online
              </h1>
              <p className="is-size-7">
                Learn online using quality content. Take assessments to level
                up.
              </p>
            </div>
            <div className="column">
              <h1 className="has-text-weight-bold is-size-7 header__title">
                Build Projects
              </h1>
              <p className="is-size-7">
                Build projects, contibute to open source and get support from
                mentors.
              </p>
            </div>
            <div className="column">
              <h1 className="has-text-weight-bold is-size-7 header__title">
                Access Opportunities
              </h1>
              <p className="is-size-7">
                Get access to job and entrepreneurship opportunities across the
                globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
