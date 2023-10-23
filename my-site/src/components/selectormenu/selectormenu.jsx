import React, { Component, useCallback, useRef } from 'react';
import ScrollToSection from '../scrollToSection/scrollToSection';

import './selectormenu.css';



export default class SelectorMenu extends Component{

  constructor(props)
  {
      super(props);
      this.handleScrollTo = this.handleScrollTo.bind(this);
      

  }

  state = {

  }


  
  componentDidMount(){
  
  }
  handleScrollTo(ref) {
    const element = ref.current;
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  

  

  
  render(){
    const {topRef, aboutRef, projectsRef, contactRef } = this.props;

    return(
      <div>
      <div className="prevent-select hide-bullet selector-menu-container">
        <ul className="font">
        <li
            className="hover-effect"
            onClick={() => this.props.scrollToTop()}
          >
            Daniel.A
          </li>
          
          <li
            className="hover-effect"
            onClick={() => this.handleScrollTo(projectsRef)}
          >
            Projects
          </li>
          <li
            className="hover-effect"
            onClick={() => this.handleScrollTo(aboutRef)}
          >
            About
          </li>
          <li
            className="hover-effect"
            onClick={() => this.handleScrollTo(contactRef)}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>)
  }

}


