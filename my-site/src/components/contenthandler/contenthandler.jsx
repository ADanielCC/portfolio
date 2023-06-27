import React, { Component, useCallback } from 'react';







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
      <div>
      <h3>Projects</h3>
      </div>

      <div>
      <h3>Skills</h3>
      </div>

      
      <div>
      <h3>Contact info</h3>
      
       <div> <a href="https://github.com/ADanielCC">GIT</a></div>
       <div> <a href="mailto:daniel.adolfsson.93@gmail.com">Email </a></div>
       
        
      </div>      
    
    </div>)
  }

}


