import './App.css';
import React, { Fragment } from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from './.components/navbar';
import Moos from './.components/moos';

import About from './.components/about';
import Home from './.components/home';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Cow Media'
        };
    }

    render() {
        return (
            <div class="main">
                <Navbar />
                <Routes>
                    <Fragment>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="about" element={<About />} />
                    </Fragment>
                </Routes>
                <Moos />
            </div>
        );
    }
}

export default App;