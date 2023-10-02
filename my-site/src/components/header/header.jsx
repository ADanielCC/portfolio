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

    return (
      <div>
        <div ref={this.topRef}>
          <h1 className="header noselect">Daniel Adolfsson</h1> {/* Use className for class */}
          <div className="selector noselect"> {/* Use className for class */}
            <SelectorMenu
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
