import React, { Component } from 'react';
import './projectViewer.css'

export default class ProjectViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDescriptionVisible: false,
        };
    }

    toggleDescription = () => {
        this.setState((prevState) => ({
            isDescriptionVisible: !prevState.isDescriptionVisible,
        }));
    };

    render() {
        const { title, description, logo, screenShot, tags, projectLink, githubLink } = this.props;
        const { isDescriptionVisible } = this.state;

        return (
            <div className="project">
                <div className="project-header">
                    <img src={logo} alt={title} className="project-logo" />
                    <a href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline'
                        >
                        <img src={screenShot} className="project-screenshot" /></a>
                    <h3 className="project-title">{title}</h3>
                </div>

                {isDescriptionVisible && (
                    <div className="project-description link-inline">
                        <p>{description}</p>
                        <ul>
                            {tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))}
                        </ul>
                        <div className="project-links">
                            <a href={projectLink} target="_blank" rel="noopener noreferrer">
                                Project
                            </a>
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                    </div>
                )}

                <button onClick={this.toggleDescription}>
                    {isDescriptionVisible ? 'Hide Description' : 'Show Description'}
                </button>
            </div>
        );
    }
}


