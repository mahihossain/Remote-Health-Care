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
import styles from './app.module.scss';
import ClientReview from './components/ClientReview/ClientReview';
import OurTeam from './components/OurTeam/OurTeam';
import Image from './assets/ClientReview/review.jpg';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="stopOverflow">
                    <Nav />
                    <Landing />
                    <div className={styles.row}>
                        <ClientReview Image={Image} />
                    </div>
                    <div className={styles.row}>
                        <OurTeam Image={Image} />
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default App;
