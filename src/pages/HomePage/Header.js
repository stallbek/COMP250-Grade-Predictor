import React from 'react';
import "./HeaderStyle.css"
import {useNavigate} from "react-router-dom";
import bird from './assets/bird_logo.png'


const Header = () => {
    const navigate = useNavigate();

    const HandleClick = () => {
        navigate("/")
    }

    return (
        <div className={"app-container"}>
            <header className="header">
                <div onClick={HandleClick} className="logo">
                    <img src={bird} alt="" className={'bird'}/>
                </div>
                <nav className="nav-links">
                    <a href="/calculator">Predictor</a>
                    <a href="/about">About</a>
                </nav>
            </header>
        </div>
    );
};

export default Header;