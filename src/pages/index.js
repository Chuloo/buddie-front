import React from "react"
import Layout from "../components/layout"
import "./index.css"
import Art from "../../assets/Artwork@1x.png"
import LearnArt from "../../assets/artwork.svg"
import BuildArt from "../../assets/artwork-build.svg"
import OpportunityArt from "../../assets/artwork-opportunity.svg"

const Home = () => {
  return (
    <Layout>
      <div>
        {/* Splash section with header */}
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

        {/* Splash section with program details */}
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

        {/* About section */}
        <div className="about">
          <div className="width columns">
            <div className="column is-6 about_main">
              <h3 className="has-text-weight-bold is-uppercase is-size-6 about_title">
                About us
              </h3>
              <p className="about_subtitle">
                A community empowering the next generation of Global technology
                leaders.
              </p>
              <h3 className="about_quote has-text-weight-bold is-size-3 about_quote">
                "As one ascends the overall hierarchy, each node has its own
                volume that tightly compas all"
              </h3>
            </div>
            <div className="column is-6 about_details">
              <div className="about_details_text">
                <p>
                  Cras diam elit, tempus eu lorem a, vestibulum aliquet nunc.
                  Cras in ante eu odio ultricies elementum nec a est. Nullam
                  hendrerit metus vel orci consequat, ut rhoncus ipsum laoreet.
                  Vestibulum imperdiet dolor justo, id ultrices odio hendrerit
                  in. Nam in tellus ut nisl ultricies luctus. Mauris ac leo
                  sapien. Aenean non lectus sem. Donec suscipit odio nisi, nec
                  molestie eros malesuada vel. Pellentesque blandit quam sit
                  amet massa tincidunt, ac commodo nunc sollicitudin. Nulla
                  aliquet, enim at tempor vestibulum, erat neque fermentum
                  sapien, quis aliquam metus mauris quis orci.
                </p>
                <br />
                <p>
                  Aliquam ut quam neque. Curabitur nibh quam, tempor ultrices
                  faucibus fringilla, molestie sit amet lacus. Phasellus
                  tristique vel nulla dapibus faucibus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="community">
          {/* Learn section */}
          <div className="learn">
            <div className="width columns">
              <div className="column is-6 learn_art">
                <img src={LearnArt} alt="Learn Artwork" />
              </div>
              <div className="column is-6 learn_main">
                <h2 className="learn_title has-text-weight-bold is-size-1">
                  Learn
                </h2>
                <p className="learn_details">
                  Go from Noob to Pro using a specified curriculum with quality
                  resources online. Receive support from mentors who monitor and
                  support your learning. Complete assessments to ensure progress
                  on your journey.
                </p>
                <a>
                  <p className="learn_discover is-uppercase has-text-weight-bold is-size-7">
                    Discover{" "}
                    <span>
                      <i
                        className="fas fa-chevron-right is-size-7"
                        style={{
                          verticalAlign: "middle",
                          color: "#51d099",
                          marginLeft: "5px",
                        }}
                      />
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Build Section */}
          <div className="build">
            <div className="width columns">
              <div className="column is-6 build_main">
                <h2 className="build_title has-text-weight-bold is-size-1">
                  Build
                </h2>
                <p className="build_details">
                  Build products to grow your portfolio. Contribute to existing
                  projects, open-source or otherwise. Collaborate with other
                  members of the community to build amazing stuff.
                </p>
                <a>
                  <p className="build_discover is-uppercase has-text-weight-bold is-size-7">
                    Discover{" "}
                    <span>
                      <i
                        className="fas fa-chevron-right is-size-7"
                        style={{
                          verticalAlign: "middle",
                          color: "#51d099",
                          marginLeft: "5px",
                        }}
                      />
                    </span>
                  </p>
                </a>
              </div>
              <div className="column is-6 learn_art">
                <img src={BuildArt} alt="Build Artwork" />
              </div>
            </div>
          </div>

          {/* Opportunities section */}
          <div className="learn">
            <div className="width columns">
              <div className="column is-6 learn_art">
                <img src={OpportunityArt} alt="Opportunity Artwork" />
              </div>
              <div className="column is-6 learn_main">
                <h2 className="learn_title has-text-weight-bold is-size-1">
                  Opportunities
                </h2>
                <p className="learn_details">
                  Get access to opportunities in tech. Apply to both remote and
                  local jobs on the job board. Get on paid projects in the
                  community. Find your co-founder amongst the community.
                </p>
                <a>
                  <p className="learn_discover is-uppercase has-text-weight-bold is-size-7">
                    Discover{" "}
                    <span>
                      <i
                        className="fas fa-chevron-right is-size-7"
                        style={{
                          verticalAlign: "middle",
                          color: "#51d099",
                          marginLeft: "5px",
                        }}
                      />
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
