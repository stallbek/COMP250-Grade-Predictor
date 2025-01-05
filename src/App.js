import React from 'react';
import {Route, Routes} from "react-router-dom";
import Calculator from "./pages/Calculator/Calculator";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css"
import AboutPage from "./pages/About/AboutPage";
import Header from "./pages/HomePage/Header";

const App = () => {
    return (
        <div>
            <Header/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/calculator" element={<Calculator/>}/>
              <Route path="/about" element={<AboutPage/>}/>
          </Routes>
        </div>
    );
};

export default App;