import React, { Component, useCallback } from 'react';
import './contenthandler.css'





export default class Contenthandler extends Component {

  constructor(props) {
    super(props);

  }

  state = {

  }



  componentDidMount() {

  }


  render() {


    return (
      <div className="wrapper">

        <div className='section-wrapper'>
          <section

            class="contentbox no-top-margin"
            id="top"
            ref={this.props.topRef}

          >

            <h3>Ready for new and exiting projects</h3>

          </section>

          <section

            class="contentbox"
            id="projects"
            ref={this.props.projectsRef}>

            <h3>Projects</h3>




            <div>
              <h4>På God Tass</h4>
              <a href="https://leafy-duckanoo-bd3caf.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/godtasslogo.png"
                  className="godtasslogo"
                  alt="Logo"
                />
              </a>
              <p>
                "På God Tass" is a heartwarming project that I had the privilege to work on. It's a dog hospice located in Lundsbrunn, dedicated to providing loving care and comfort to our furry friends.
              </p>
              <p>
                I was the lead developer for this project, and I utilized a combination of technologies such as React, HTML, and CSS to create an engaging and informative website. Some of the key features include:
              </p>
              <ul>
                <li>Interactive user interface</li>
                <li>Information on services provided</li>
                <li>Contact details and location map</li>
              </ul>
              <p>
                This was my first solo project and it allowed me to deepen my skills in front-end development and improve my ability to work with React. It was both a rewarding and educational experience.
              </p>
              <p>
                You can explore the project on this   
                <a href="https://leafy-duckanoo-bd3caf.netlify.app/" target="_blank" rel="noopener noreferrer">mirror site</a>.
              </p>
              <p>
                If you're interested in the source code, you can find it on my <a href="https://github.com/ADanielCC/goodboi" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
              </p>
            </div>





          </section>

          <section
            class="contentbox"
            id="about"
            ref={this.props.aboutRef}>

            <h3>About</h3>

            *Scrolling bar with react,html,css,bootstrap,angular etc"

          </section>


          <section
            className='projects'
            class="contentbox"
            id="contact"
            ref={this.props.contactRef}>

            <h3>Contact info</h3>

            <div> <a href="https://github.com/ADanielCC">GIT</a></div>
            <div> <a href="mailto:daniel.adolfsson.93@gmail.com">Email</a></div>

          </section>
        </div>



      </div>)
  }

}


