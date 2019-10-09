import React, { Component } from 'react';
import '../containers/App.css';
import ClientReview from '../components/ClientReview/ClientReview';
import OurTeam from '../components/OurTeam/OurTeam';
import Image from '../assets/ClientReview/review.jpg';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ClientReview Image={Image} />
        <OurTeam Image={Image} />
      </div>
    );
  }
}

export default App;
