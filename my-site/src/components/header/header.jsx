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



    
      <h1 class="header" >Daniel Adolfsson</h1>

      <Selectormenu></Selectormenu>
    
    
    
    
    </div>)
  }

}


