/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
// import './App.min.css'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Landing from './components/landing/landing';
import './App.scss';
import 'normalize.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="stopOverflow">
                    <Nav />
                    <Landing />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
