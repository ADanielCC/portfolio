import React, { Component, useCallback } from 'react';



import Header from '../header/header.jsx';
import Contenthandler from '../contenthandler/contenthandler.jsx';



export default class Main extends Component{

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
    <div id ="temp" >

      YOOOO 
         <Header></Header>
         <Contenthandler></Contenthandler>


    
    </div>)
  }

}


