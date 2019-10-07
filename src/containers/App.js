import React, { Component } from "react";
import "../containers/App.css";
import ClientReview from '../components/ClientReview/ClientReview';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ClientReview></ClientReview>
      </div>
    );
  }
}

export default App;
