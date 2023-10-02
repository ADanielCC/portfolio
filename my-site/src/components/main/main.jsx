import React, { Component, useCallback, useRef } from 'react';




import Header from '../header/header.jsx';
import Contenthandler from '../contenthandler/contenthandler.jsx';
import Footer from '../footer/footer.jsx';
// import ScrollToSection from './ScrollToSection';




export default class Main extends Component{


  constructor(props)
  {
    super(props);
    this.topRef = React.createRef();
    this.aboutRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();

  }

  state = {

   


  }


  componentDidMount(){
  
  }



  
  render(){

    // const aboutRef = useRef(null);
    // const projectsRef = useRef(null);
    // const contactRef = useRef(null);
   

    return(
      
    <div >

      
         <Header
         topRef={this.topRef}
         aboutRef={this.aboutRef}
         projectsRef={this.projectsRef}
         contactRef={this.contactRef}
         
         ></Header>
         <Contenthandler >

         </Contenthandler>
         <Footer></Footer>


    
    </div>)
  }

}


