import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="/1.jpg"
                            alt="avatar"
                            className="avatar-image" />
                        <div className="banner-text">
                            <h1 className="">Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | Javascript | React Js | Angular | React Native | Express | NodeJS | MongoDB | MySQL</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/omar-chaouachi-8a9137202" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/omar-chaouachi" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Freecodecamp */}
                                <a href="https://www.freecodecamp.org/omar-chaouachi" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;