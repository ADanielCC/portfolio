import React, { Component } from 'react';







import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt,faHtml5 } from '@fortawesome/free-brands-svg-icons';
import './contenthandler.css';



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
              {/* <h4>På God Tass</h4> */}
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

              <ul>
                <li>One page layout</li>
                <li>Information on services provided both in English and Swedish</li>
                <li>Contact details and location details with map</li>
                <li>Responsive CSS styling for use with diffrent devices</li>
              </ul>

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

                  GitHub repository</a>.
                  <FontAwesomeIcon 
                  className='gitHubTag tag'
                  icon={faGithub} />
              </p>

              <div className='project-tags'>
                <div className='HTMLTag tag'
                >&lt;HTML <FontAwesomeIcon icon={faHtml5} /> &gt;
                </div>

                <div className='CSSTag tag'>
                  #CSS <FontAwesomeIcon icon={faCss3Alt} />#
                </div>

                <div className='reactTag tag'>
                  React <FontAwesomeIcon icon={faReact}/> 
                </div>

                <div className='hostingTag tag'
                >Netlify hosting <FontAwesomeIcon icon={faServer}/> 

                </div>
              </div>
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


