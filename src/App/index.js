import React, { Component } from "react";
import "./style.css";
import { Route, Link } from "react-router-dom"
import About from "./About/About"
import Work from "./Work/Work"
import Contact from "./Contact/Contact"
import selfie from '../Assets/profile-pic.PNG'
import Landing from "./Landing"
import Resume from './Resume/Resume'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="landing-head">Name/intro/pic</div>
      <h2>Welcome to my page!</h2>
             <p>I'm Aaron, a Web Developer & Software Engineer! Click a link, take a look around and feel free to contact me!</p>
             <div className="links">
                <Link to="/about">About</Link>
                <br/>
                <Link to="/work">My Work</Link>
                <br/>
                <Link to="/contact">Contact Me</Link>
                <br />
                
              </div>
        {/* <div className="top">
          <div className="header">
            <div className="nav">
              <div className="namestuff">
                <Link to="/" className = 'piclink'><h1 className = "header-name">Aaron Denney</h1></Link>
                <p className="sub-header">Web Developer/Software Engineer</p>
              </div>
              <div className="links">
                <Link to="/about">About</Link>
                <br/>
                <Link to="/work">My Work</Link>
                <br/>
                <Link to="/contact">Contact Me</Link>
                <br />
                
              </div>
            </div>
            <div>
              <Link to="/" className = 'piclink'><img src= {selfie} alt="me" className="photo"/></Link>
            </div>
          </div>
          <hr/>
        </div>
        <main>
          <Route
            exact path="/"
            component={Landing}
          />
          <Route 
            path="/about"
            component={About}
          />
          <Route 
            path="/work"
            component={Work}
          />
          <Route 
            path="/contact"
            component={Contact}
          />
          <Route 
            path="/resume"
            component={Resume}
          />
        </main> */}
      </div>
    )
  }
}

export default App;
