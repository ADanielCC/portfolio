import React, { Component, useCallback } from 'react';
import Selectormenu from '../selectormenu/selectormenu';
import './header.css';






export default class Header extends Component{

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
    <div>



      <div>
      <h1 class="header noselect" >Daniel Adolfsson</h1>

      <div class="selector noselect">
      <Selectormenu ></Selectormenu>
      </div>
      
      </div>
    
    
    
    </div>)
  }

}


