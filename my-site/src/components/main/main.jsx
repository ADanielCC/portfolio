import React, { Component, useCallback } from 'react';




import Header from '../header/header.jsx';
import Contenthandler from '../contenthandler/contenthandler.jsx';
import Footer from '../footer/footer.jsx';




export default class Main extends Component{


  constructor(props)
  {
      super(props);

  }

  state = {

    contentId: ["splash","projects","skills","contact"],
    currentContent: "splash",


  }






  handleCurrentContent = (id) =>{
    // let tmpId  = this.currentContent;

   this.setState({currentContent:id})


  }


  
  componentDidMount(){
  
  }



  
  render(){
   

    return(
      
    <div >

      
         <Header></Header>
         <Contenthandler 
         
        
         
         
         
         
         ></Contenthandler>
         <Footer></Footer>


    
    </div>)
  }

}


