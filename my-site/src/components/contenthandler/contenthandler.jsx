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




      
      <div class="contentbox" id="projects">
      <h3>Projects</h3>
      <div><a href="">På god tass</a></div>
      </div>

      <div class="contentbox">
      <h3>Skills</h3>
      *Scrolling bar with react,html,css,bootstrap,angular etc"
      </div>

      
      <div class="contentbox">
      <h3>Contact info</h3>
      
       <div> <a href="https://github.com/ADanielCC">GIT</a></div>
       <div> <a href="mailto:daniel.adolfsson.93@gmail.com">Email</a></div>
       
        
      </div>      
    
    </div>)
  }

}


