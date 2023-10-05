import React, { Component } from 'react';
import SelectorMenu from '../selectormenu/selectorMenu';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }



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
          <div className="header noselect color-changing-bg">

            <div className='name-title'>Daniel Adolfsson</div>       
            
            
            <div className="titles">Title1 Title2 Title3 Title4</div>
              
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
