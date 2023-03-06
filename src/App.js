import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Details from "./components/Details";
import Rates from "./components/Rates";
import Contact from "./components/Contact";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="pageBody">
                    <Routes>
                        <Route exact path='/' element=<Home /> />
                        <Route exact path='/gallery' element=<Gallery /> />
                        <Route exact path='/gallery/:category' element=<Details /> />
                        <Route exact path='/rates' element=<Rates /> />
                        <Route exact path='/contact' element=<Contact /> />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
