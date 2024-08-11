import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return ( <
        Router className = "App" >
        <
        Header / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Hero / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/projects"
        element = { < Projects / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        /> <
        /Routes> <
        Footer / >
        <
        /Router>
    );
}

export default App;