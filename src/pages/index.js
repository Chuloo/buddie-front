import React from "react"
import Layout from "../components/layout"
import "./index.css"
import FindArt from "../../assets/artwork-find.svg"
import EvaluateArt from "../../assets/artwork-evaluate.svg"
import BuildArt from "../../assets/artwork-build.svg"
import CreateArt from "../../assets/artwork-create.svg"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const FindABuddy = () => {
  return (
    <OutboundLink
      href="https://discord.gg/gNQjB58"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="learn_discover is-uppercase has-text-weight-bold is-size-7">
        Find a Buddie{" "}
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
    </OutboundLink>
  )
}

const TitleText = () => (
  <h1 className="header__title is-size-1 is-size-3-mobile has-text-weight-bold">
    <p>We set goals</p>
    <p>We achieve them</p>
    <p className="has-text-success">Together</p>
  </h1>
)

const Home = () => {
  return (
    <Layout>
      <div>
        {/* Splash section with header */}
        <div className="splash_page width">
          <div className="columns">
            <div className="column call-to-action is-two-fifths">
              <TitleText />
              <p className="header__subtitle">
                This is our way of getting better at whatever we choose, and
                goals we set, by holding each other accountable.
              </p>
              <div className="action">
                <OutboundLink
                  href="https://subscribe.buddie.io/join"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button cta_button is-primary is-large">
                    <h1 className="is-size-6">Get early access</h1>
                  </button>
                </OutboundLink>
              </div>
            </div>
            <div className="column illustration is-hidden-touch">
              <img
                src={BuildArt}
                alt="Illustration"
                width="500px"
                className="is-centered"
              />
            </div>
          </div>
        </div>

        {/* Splash section with program details */}
        <div className="width splash_details columns">
          <div className="column columns is-6 is-offset-6 splash__desc">
            <div className="column">
              <h4 className="has-text-weight-bold is-size-6 header__title">
                Find a partner
              </h4>
              <p className="is-size-6">
                Find a partner sharing the same interest with similar goals.
              </p>
            </div>
            <div className="column">
              <h4 className="has-text-weight-bold is-size-6 header__title">
                Create a detailed plan
              </h4>
              <p className="is-size-6">
                Share your goals and plans to achieve them.
              </p>
            </div>
            <div className="column">
              <h4 className="has-text-weight-bold is-size-6 header__title">
                Evaluate set goals
              </h4>
              <p className="is-size-6">
                Analyse and track set goals over time.
              </p>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="about" id="about">
          <div className="width columns">
            <div className="column is-full-mobile about_main">
              <h3 className="has-text-weight-bold is-uppercase is-size-5 about_title">
                What do we do?
              </h3>
              <p className="about_subtitle is-half-mobile">
                We are a community of goal oriented individuals looking to
                become better versions of ourselves.
              </p>
              <h4 className="about_quote has-text-weight-bold is-size-3 is-size-4-mobile about_quote">
                "With the over-reliance on technology, maybe all we need is not
                a bot, but a Buddie to check with, and ultimately grow with"
              </h4>
            </div>
            <div className="column about_details">
              <div className="">
                <p>
                  We set goals and have plans for numerous reasons, whether to
                  become better individuals, to live healthier, read more, work
                  smarter, save more, study better or even just interact within
                  ourselves and impact the society.
                </p>
                <br />
                <p>
                  Little to most times we go off course with these plans, derail
                  and lose focus.
                </p>
                <p>
                  At Buddie, we believe together we can hold each other
                  accountable for shared goals with clearly defined plans.{" "}
                </p>
                <br />
                <p>
                  These are not judging one another based on work KPIs, just two
                  or more people making a conscious effort to see that they
                  ultimately succeed at set individual or collective goals, in a
                  timely fashion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="community">
          {/* Learn section */}
          <div className="learn">
            <div className="width columns">
              <div className="column learn_art">
                <img src={FindArt} alt="Find Artwork" />
              </div>
              <div className="column learn_main">
                <h2 className="learn_title has-text-weight-bold is-size-1 is-size-3-mobile">
                  Find a partner
                </h2>
                <p className="learn_details">
                  Are you building that side project and looking for someone to
                  hold you accountable to completing it? Whatever goal you set,
                  Find a Buddie from the pool of similarly interested people in
                  the community. We have stict compliance policies to ensure
                  everyone maintains proper code of conduct within the
                  community. There are moderators to ensure that no form of
                  harrassment is condoned and we can all thrive in a safe
                  productive haven.
                </p>
                <FindABuddy />
              </div>
            </div>
          </div>

          {/* Build Section */}
          <div className="build">
            <div className="width columns">
              <div className="column learn_art is-hidden-desktop is-hidden-tablet">
                <img src={CreateArt} alt="Build Artwork" />
              </div>
              <div className="column build_main">
                <h2 className="build_title has-text-weight-bold is-size-1 is-size-3-mobile">
                  Create goals with actionable timelines.
                </h2>
                <p className="build_details">
                  Alongside your Buddie, create goals however you choose. Feel
                  free to define the boundaries. Forge realistic and timely
                  plans either singularly depending on your varying preferences
                  or together. Discuss a channel to remind one another and agree
                  on the mode and timeliness of checking in with each other.
                </p>
                <FindABuddy />
              </div>
              <div className="column learn_art is-hidden-touch">
                <img src={CreateArt} alt="Build Artwork" />
              </div>
            </div>
          </div>

          {/* Opportunities section */}
          <div className="learn">
            <div className="width columns">
              <div className="column learn_art">
                <img src={EvaluateArt} alt="Evaluate Artwork" />
              </div>
              <div className="column learn_main">
                <h2 className="learn_title has-text-weight-bold is-size-1 is-size-3-mobile">
                  Evaluate Goals and Achievements
                </h2>
                <p className="learn_details">
                  Intermittently, your progress and achievemets will be tracked,
                  either by milestones or set granular objectives. Could even be
                  how much weight you lost since the start of the year! Tracking
                  and evaluating your goals helps Buddies know when to put in
                  more work, or when to celebrate.
                </p>
                <FindABuddy />
              </div>
            </div>
          </div>
        </div>

        {/* Event section */}
        <div className="events">
          <div className="width">
            <div className="events_section_title">
              <h3 className="has-text-weight-bold is-uppercase is-size-5">
                Want to reach us?
              </h3>
            </div>
            <div className="columns event_section_details">
              <div className="column is-4">
                <h5 className="event_month is-size-1 is-size-3-mobile has-text-weight-bold">
                  We're glad to speak to you
                </h5>
              </div>
              {/* <div className="column is-4">
                <p className="event_date has-text-weight-bold is-size-7">
                  Email
                </p>
                <h3 className="event_title has-text-weight-bold is-size-5">
                  Send us an email
                </h3>
                <p className="event_content">
                  Send us an email to chris@buddy.io
                </p> */}
              {/* <button className="button is-medium is-primary event_button">
                  <p className="is-size-6">Register</p>
                </button> */}
              {/* </div> */}

              <div className="column is-4">
                <p className="event_date has-text-weight-bold is-size-7">
                  Twitter
                </p>
                <h3 className="event_title has-text-weight-bold is-size-5">
                  Shoot us a DM on Twitter
                </h3>
                <p className="event_content">
                  <OutboundLink
                    href="https://twitter.com/messages/compose?recipient_id=1225915478834585602"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DM us on twitter with @buddie_io
                  </OutboundLink>
                </p>
                {/* <button className="button is-medium is-primary event_button">
                  <p className="is-size-6">Register</p>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
