import React, { Component, useCallback } from 'react';
import { useRef } from 'react';



import Header from '../header/header.jsx';
import Contenthandler from '../contenthandler/contenthandler.jsx';
import Footer from '../footer/footer.jsx';



export default class Main extends Component{
 

  constructor(props)
  {
      super(props);

  }

  state = {
    currentContent: [],
// not sure what to use here maybe for the scrolling
  }




  
  componentDidMount(){
  
  }



  
  render(){
   

    return(
      
    <div >

      const aboutRef = useRef()
         <Header></Header>
         <Contenthandler 
         
        
         
         
         
         
         ></Contenthandler>
         <Footer></Footer>


    
    </div>)
  }

}


