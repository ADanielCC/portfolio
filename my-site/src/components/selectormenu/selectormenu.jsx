import React, { Component, useCallback } from 'react';
import './selectormenu.css';



export default class Selectormenu extends Component{

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
    <div >

      <div class="prevent-select hide-bullet">
      <ul>
        <li class="hover-effect" >Daniel.A</li>
        <li class="hover-effect" >Projects</li>
        <li class="hover-effect" >Skills</li>
        <li class="hover-effect" >Contact</li>
        
      </ul>
      </div>
    
    </div>)
  }

}


