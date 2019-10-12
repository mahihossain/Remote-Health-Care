import React, { Component } from 'react';
// import './App.min.css'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Landing from './components/landing/landing';
import './App.scss';
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="stopOverflow">
					<Nav></Nav>
					<Landing></Landing>

					<Footer></Footer>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
