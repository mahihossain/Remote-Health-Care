/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styles from './landing.module.scss';
import { ReactComponent as SVG } from '../../assets/undraw_doctor.svg';

class App extends Component {
    render() {
        return (
            <div className={styles.row}>
                <div className={styles.is_7}>
                    <SVG className={styles.svg} />
                </div>
                <div className={styles.is_5}>
                    <div className={styles.tagLine}>
                        <h1>Giant ass Tagline, A little bit more.</h1>
                        <h1>We Care</h1>
                    </div>
                </div>
                <div className={styles.is_12}>
                    <div className={styles.mouse_icon} />
                </div>
                <div className={styles.block}>
                    <span>scroll</span>
                </div>
            </div>
        );
    }
}

export default App;
