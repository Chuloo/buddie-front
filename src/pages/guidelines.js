import React from "react"
import Layout from "../components/layout"
import "./index.css"

const FindABuddy = () => {
  return (
    <a href="https://discord.gg/gNQjB58" target="_blank" rel="noopener noreferrer">
      <p className="learn_discover is-uppercase has-text-weight-bold is-size-7">
        Find a buddie{" "}
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
      <div style={styles.container}>
        <h2>Throw in guidelines here</h2>
      </div>
    </Layout>
  )
}

const styles = {
  container:{
    minHeight: "600px"
  }
}

export default Home
