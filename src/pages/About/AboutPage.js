import React from 'react';
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className="aboutpage-container">
            <div className="aboutpage-content">
                <h1 className="aboutpage-title">About</h1>

                <div className="aboutpage-sections">
                    <div className="aboutpage-section">
                        <p className="aboutpage-heading">Why this site exists?</p>
                        <p className="aboutpage-text">
                            The website was developed in response to the introduction of a novel and unconventional grading system implemented in COMP250 during the Fall 2024 semester by Professor Giulia Alberini. This system, while innovative, caused significant confusion among students, including myself. The app aims to alleviate this uncertainty by predicting grades based on the course's grading scheme.
                        </p>
                    </div>

                    <div className="aboutpage-section">
                        <p className="aboutpage-heading">Who is the developer?</p>
                        <p className="aboutpage-text">
                            My name is Stalbek Ulanbek uulu, and I am currently pursuing a Bachelor of Science in Software Engineering at McGill University. With a passion for innovation and technology, I am dedicated to mastering the art of software development and exploring its transformative impact on the modern world.
                        </p>
                    </div>

                    <div className="aboutpage-links">
                        <a href="https://github.com/stallbek" target={'_blank'}>GitHub</a>
                        <a href="https://www.linkedin.com/in/stalbek-ulanbek-uulu/" target={'_blank'}>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
