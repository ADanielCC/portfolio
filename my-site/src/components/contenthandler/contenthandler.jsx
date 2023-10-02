import React, { Component, useCallback } from 'react';
import './contenthandler.css'


export default class Contenthandler extends Component{

  constructor(props)
  {
      super(props);

  }

  state = {

  }


  
  componentDidMount(){
  
  }

  
  render(){
   

    return(
    <div class="wrapper">

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
              <a href="">På god tass</a>
            </div>
      </section>

      <section  
        class="contentbox"
        id ="about"
        ref={this.props.aboutRef}>
        
        <h3>About</h3>

        *Scrolling bar with react,html,css,bootstrap,angular etc"

      </section>

      
      <section 
        class="contentbox" 
        id="contact"
        ref={this.props.contactRef}>

          <h3>Contact info</h3>
          
          <div> <a href="https://github.com/ADanielCC">GIT</a></div>
          <div> <a href="mailto:daniel.adolfsson.93@gmail.com">Email</a></div>
     
      </section>      
    
    </div>)
  }

}


