import React, { Component, useCallback, useRef } from 'react';




import Header from '../header/header.jsx';
import Contenthandler from '../contenthandler/contenthandler.jsx';
import Footer from '../footer/footer.jsx';
import CustomScrollbar from '../customScrollBar/customScrollBar';

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
    const { topRef, aboutRef, projectsRef, contactRef } = this.props;
    // const aboutRef = useRef(null);
    // const projectsRef = useRef(null);
    // const contactRef = useRef(null);
   

    return(
      
    <div >

      
         <Header
         topRef={this.topRef}
         projectsRef={this.projectsRef}
         aboutRef={this.aboutRef}
         contactRef={this.contactRef}>
         </Header>

        
       
          {/* Content to be scrolled */}
          <Contenthandler
            topRef={this.topRef}
            aboutRef={this.aboutRef}
            projectsRef={this.projectsRef}
            contactRef={this.contactRef}
          />
       
        
        
      
         
         <Footer></Footer>


    
    </div>)
  }

}


