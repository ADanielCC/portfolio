import React, { Component } from 'react';
import SelectorMenu from '../selectormenu/selectorMenu';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  state = {};

  componentDidMount() {}

  render() {
    const { topRef, aboutRef, projectsRef, contactRef } = this.props; // Destructure props

    // Define the scrollToTop function
    function scrollToTop() {
      // Scroll to the top of the page with smooth animation
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    return (
      <div>
        <div ref={this.topRef}>
          <h1 className="header noselect name-title">Daniel Adolfsson</h1> 
          <div className="selector noselect">
            <SelectorMenu
              scrollToTop={scrollToTop}
              topRef={topRef}
              aboutRef={aboutRef}
              projectsRef={projectsRef}
              contactRef={contactRef}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;