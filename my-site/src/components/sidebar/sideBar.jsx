import React, { Component } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faCss3Alt,faHtml5 } from '@fortawesome/free-brands-svg-icons';
import './sideBar.css';



export default class SideBar extends Component {

    // constructor(props) {
    //   super(props);

    // }

    state = {

    }



    componentDidMount() {

    }


    render() {


        return (
            <div className="wrapper">

                <div>

                    <a
                        href="https://github.com/ADanielCC/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='no-link-style icon'
                        
                        >

                        <FontAwesomeIcon icon={faGithub} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/daniel-adolfsson-b2b6a5171/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='no-link-style icon'
                        >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a
                        href="mailto:daniel.adolfsson.93@gmail.com"
                        className='no-link-style icon'
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>




            </div>)
    }

}


