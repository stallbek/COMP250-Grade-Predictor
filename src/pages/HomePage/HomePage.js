import React from "react";
import "./homepageStyle.css"
import {useNavigate} from "react-router-dom";
import Header from "./Header";


function HomePage() {
    const navigate = useNavigate();

    const HandleSearch = () => {
        navigate("/calculator")
    }

    return (
        <div>
            <div className="app-container">
                <div className="content">
                    <h1>COMP250 grade predictor</h1>
                    <div className="c">
                        <article>
                            Please write in short format in input fields, for instance AM, M, I, and etc.
                        </article>
                        <p>
                            M - Mastery
                        </p>
                        <p>
                            AM - Approaching Mastery
                        </p>
                        <p>
                            P - Proficiency
                        </p>
                        <p>
                            B - Basic
                        </p>
                        <p>
                            I - Inconclusive
                        </p>

                        <h4>
                            If there is any error, please contact me. All contacts inside about page.
                        </h4>
                    </div>
                    <button onClick={HandleSearch} className={'animated-button'}>Start</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
