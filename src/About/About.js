import React from 'react';
import '../Home.css'

function About(){
  return(
    <div>
      <div className="home-text">
        <h2>About Movie App</h2>
      </div>
      <br></br>
      <div className="home-text">
        <p>This movie app is built with React. On the home page you can search for any film or browse by current releases. The Api is served by the moviedb.org</p>
      </div>
    </div>
    
  )
}

export default About;