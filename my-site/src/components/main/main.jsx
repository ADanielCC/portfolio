import React, { Component } from 'react';
import Header from '../header/header.jsx';
import CustomScrollbar from '../customScrollBar/customScrollBar';
import Contenthandler from '../contenthandler/contenthandler.jsx';
import Footer from '../footer/footer.jsx';
import './main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.topRef = React.createRef();
    this.aboutRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();
  }

  state = {};

  componentDidMount() {}

  render() {
    const { topRef, aboutRef, projectsRef, contactRef } = this.props;

    return (
      <div className='main'>
        <Header
          topRef={this.topRef}
          projectsRef={this.projectsRef}
          aboutRef={this.aboutRef}
          contactRef={this.contactRef}
        />

     
          {/* Content to be scrolled */}
          <Contenthandler
            topRef={this.topRef}
            aboutRef={this.aboutRef}
            projectsRef={this.projectsRef}
            contactRef={this.contactRef}
          />
          {/* <CustomScrollbar></CustomScrollbar> */}
        

        <Footer></Footer>
      </div>
    );
  }
}