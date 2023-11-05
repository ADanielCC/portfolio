import React, { Component } from 'react';

import SelectorMenu from '../selectorMenu/selectorMenu';
import LinkBar from '../linkbar/linkBar';
// import scrollToTop from '../utils/scrollToTop'; // Import the utility function

import './header.css';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }



  state = {};

  componentDidMount() { }

  render() {
    const { topRef, aboutRef, projectsRef, contactRef } = this.props; // Destructure props
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }


    return (
      <div>
        <div ref={this.topRef}>
          <div className="header noselect color-changing-bg bg">

{/* hello */}
            <div className='title-wrapper slide-in-text'>
              <div className='name-title'>Hey, I'm Daniel Adolfsson</div>
              <div className="titles">A Frontend developer dedicated to crafting the cutting edge web solutions of the future</div>
              <LinkBar className="sidebar"></LinkBar>
            </div>
          </div>

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
