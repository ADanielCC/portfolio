import React, { Component } from 'react';
import './contenthandler.css';

//font awesome imports
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faServer } from '@fortawesome/free-solid-svg-icons'
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faReact } from '@fortawesome/free-brands-svg-icons';
// import { faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';

import ProjectViewer from '../projectViewer/projectViewer';





export default class Contenthandler extends Component {

  // constructor(props) {
  //   super(props);

  // }

  state = {

  }



  componentDidMount() {

  }


  render() {


    return (
      <div className="wrapper">

        <div className='section-wrapper'>


          <section

            class="contentbox"
            id="projects"
            ref={this.props.projectsRef}>

            <h3>Projects</h3>



            {/* 
            <div>

              <a href="https://leafy-duckanoo-bd3caf.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/godtasslogo.png"
                  className="godtasslogo"
                  alt="På God Tass"
                />
              </a>

              <p>
                "På God Tass" is a heartwarming project that I had the privilege to work on. It's a dog hospice located in Lundsbrunn, dedicated to providing loving care and comfort to our furry friends.
              </p>

              <p>
                I was the lead developer for this project, and I utilized a combination of technologies such as React, HTML, and CSS to create an engaging and informative website. Some of the key features include:
              </p>


              <p>
                This was my first solo project and it allowed me to deepen my skills in front-end development and improve my ability to work with React. It was both a rewarding and educational experience.
              </p>

              <p>
                You can explore the project on this
                <a href="https://leafy-duckanoo-bd3caf.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  mirror site</a>.

              </p>
              <p>

                If you're interested in the source code, you can find it on my


                <a href="https://github.com/ADanielCC/goodboi"
                  target="_blank"
                  rel="noopener noreferrer">

                  GitHub</a>.

              </p>

              <div className='project-tags'>
                <div className='HTMLTag tag'
                >&lt;HTML <FontAwesomeIcon icon={faHtml5} /> &gt;
                </div>

                <div className='CSSTag tag'>
                  #CSS <FontAwesomeIcon icon={faCss3Alt} />#
                </div>

                <div className='reactTag tag'>
                  React <FontAwesomeIcon icon={faReact} />
                </div>

                <div className='hostingTag tag'
                >Netlify hosting <FontAwesomeIcon icon={faServer} />

                </div>
              </div>
            </div>

            */}

            <ProjectViewer
              className="contentbox"
              title="På god tass"
              description={`På God Tass is a heartwarming project that I had the privilege to work on.
              It's a dog hospice located in Lundsbrunn, dedicated to providing loving care and comfort to our furry friends.
              
              I was the lead developer for this project, and I utilized a combination of technologies such as React, HTML, and CSS to create an engaging and informative website.
               Some of the key features include:
              
              `}

              logo="/godtasslogosmaller.png"
              screenShot="/godtassscreenshot.png"
              tags={['React', 'HTML5', 'CSS',]}
              projectLink="https://godtass.netlify.app/"
              githubLink="https://github.com/ADanielCC/goodboi"
            />

          </section>













          <section
            class="contentbox"
            id="about"
            ref={this.props.aboutRef}>

            <h3>About</h3>

            

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


