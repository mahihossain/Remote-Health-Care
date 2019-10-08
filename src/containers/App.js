import React, { Component } from "react";
import "../containers/App.css";
import ClientReview from '../components/ClientReview/ClientReview';
import Image from "../assets/review.jpg";


class App extends Component {
  render() {
    return (
      <div className="App">
          <ClientReview Image={Image} />
      </div>
    );
  }
}

export default App;
