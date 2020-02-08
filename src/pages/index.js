import React from "react"
import Layout from "../components/layout"
import "./index.css"
import Art from "../../assets/Artwork@1x.png"
import LearnArt from "../../assets/artwork.svg"
import BuildArt from "../../assets/artwork-build.svg"
import OpportunityArt from "../../assets/artwork-opportunity.svg"

const FindABuddy = () => {
  return (
    <a href="https://discord.gg/gNQjB58" target="_blank" rel="noopener noreferrer">
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
    </a>
  )
}


const Home = () => {
  return (
    <Layout>
      <div>
        {/* Splash section with header */}
        <div className="section splash_page width">
          <div className="columns">
            <div className="column call-to-action is-two-fifths">
              <h1 className="header__title is-size-1 has-text-weight-bold">
                We Set Goals. We Achieve Them. Together
              </h1>
              <p className="header__subtitle">
                This is our way of getting better at whatever we choose, and goals we set, by holding each other accountable.
              </p>
              <div className="action">
                <a href="https://discord.gg/gNQjB58" target="_blank" rel="noopener noreferrer">
                <button className="button cta_button is-primary is-large">
                  <h1 className="is-size-6">Get early access</h1>
                </button>
                </a>
              </div>
            </div>
            <div className="column illustration">
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
          <div className="column columns is-6 is-offset-6">
            <div className="column">
              <h1 className="has-text-weight-bold is-size-7 header__title">
                Find a partner
              </h1>
              <p className="is-size-7">
                Find a partner sharing the same interest with similar goals and possibly the same timeline.
              </p>
            </div>
            <div className="column">
              <h1 className="has-text-weight-bold is-size-7 header__title">
                Create a detailed plan
              </h1>
              <p className="is-size-7">
                Put down everything that needs to be done, in a timely and detailed fashion, together.
              </p>
            </div>
            <div className="column">
              <h1 className="has-text-weight-bold is-size-7 header__title">
                Evaluate set goals
              </h1>
              <p className="is-size-7">
                Analyse and track set goals over time using milestones and tools, together.
              </p>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className="about" id="about">
          <div className="width columns">
            <div className="column is-6 about_main">
              <h3 className="has-text-weight-bold is-uppercase is-size-6 about_title">
                What do we do?
              </h3>
              <p className="about_subtitle">
                We are a community of goal oriented individuals looking to become better versions of ourselves.
              </p>
              <h4 className="about_quote has-text-weight-bold is-size-3 about_quote">
                "With the over-reliance on technology, maybe all we need is not a bot, but a Buddie to check with, and ultimately grow with"
              </h4>
            </div>
            <div className="column is-6 about_details">
              <div className="about_details_text">
                <p>We set goals and have plans for numerous reasons, whether to become better individuals, to live healthier, read more, work smarter, save more, study better or even just interact within ourselves and impact the society.</p> 
                  <br/>
                  <p>Little to most times we go off course with these plans, derail and lose focus.</p>
                  <p>At Buddie, we believe together we can hold each other accountable for shared goals with clearly defined plans. </p>
                <br />
                <p>
                  These are not judging one another based on work KPIs, just two or more people making a conscious effort to see that they ultimately succeed at set individual or collective goals, in a timely fashion. 
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
                <img src={Art} alt="Learn Artwork" />
              </div>
              <div className="column is-6 learn_main">
                <h2 className="learn_title has-text-weight-bold is-size-1">
                  Find a partner
                </h2>
                <p className="learn_details">
                  Are you building that side project and looking for someone to hold you accountable to completing it? Whatever goal you set, Find a Buddie from the pool of similarly interested people in the community.
                  We have stict compliance policies to ensure everyone maintains proper code of conduct within the community.
                  There are moderators to ensure that no form of harrassment is condoned and we can all thrive in a safe productive haven.
                </p>
                <FindABuddy/>
              </div>
            </div>
          </div>

          {/* Build Section */}
          <div className="build">
            <div className="width columns">
              <div className="column is-6 build_main">
                <h2 className="build_title has-text-weight-bold is-size-1">
                  Create goals with actionable timelines.
                </h2>
                <p className="build_details">
                  Alongside your Buddie, create goals however you choose. Feel free to define the boundaries. 
                  Forge realistic and timely plans either singularly depending on your varying preferences or together.
                  Discuss a channel to remind one another and agree on the mode and timeliness of checking in with each other.
                </p>
                <FindABuddy/>
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
                <img src={LearnArt} alt="Opportunity Artwork" />
              </div>
              <div className="column is-6 learn_main">
                <h2 className="learn_title has-text-weight-bold is-size-1">
                  Evaluate Goals and Achievements
                </h2>
                <p className="learn_details">
                  Intermittently, your progress and achievemets will be tracked, either by milestones or set granular objectives. 
                  Could even be how much weight you lost since the start of the year!
                  Tracking and evaluating your goals helps Buddies know when to put in more work, or when to celebrate.
                </p>
                <FindABuddy/>
              </div>
            </div>
          </div>
        </div>

        {/* Event section */}
        <div className="events">
          <div className="width">
            <div className="events_section_title">
              <h3 className="has-text-weight-bold is-uppercase">
                Want to reach us? 
              </h3>
            </div>
            <div className="columns event_section_details">
              <div className="column is-4">
                <h5 className="event_month is-size-1 has-text-weight-bold">
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
                  <a href="https://twitter.com/messages/compose?recipient_id=1225915478834585602" target="_blank" rel="noopener noreferrer">DM us on twitter with @buddie_io</a>
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
