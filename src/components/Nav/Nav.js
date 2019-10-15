/* eslint-disable react/jsx-closing-bracket-location */
import React, { Component } from 'react';
import styles from './nav.module.scss';

class Nav extends Component {
	navSlide = () => {
		// getting all the dom elements
		const burger = document
			.getElementById('Burger')
			.getElementsByTagName('div');

		const wrapper = document.getElementById('wrapper');

		const listElement = document
			.getElementById('wrapper')
			.getElementsByTagName('li');

		//  toggling animation
		wrapper.classList.toggle(styles.animateNav);
		burger[0].classList.toggle(styles.Line1);
		burger[1].classList.toggle(styles.Line2);
		burger[2].classList.toggle(styles.Line3);

		//  adding fade in animation for nav links
		for (let i = 0; i < listElement.length; i++) {
			if (listElement[i].style.animation) {
				listElement[i].style.animation = '';
			} else {
				listElement[i].style.animation = `${
					styles.navLinkFade
				} 0.5s ease forwards ${i / 7 + 0.5}s `;
			}
		}
	};

	componentDidMount = () => {
		window.addEventListener('scroll', this.handleScroll);
	};

	handleScroll = () => {
		const nav = document.getElementById('navBar');
		const wrapper = document.getElementById('wrapper');
		window.onscroll = () => {
			if (window.pageYOffset >= 547) {
				nav.classList.add(styles.sticky);
				wrapper.classList.add(styles.navSlideChange);
			} else {
				nav.classList.remove(styles.sticky);
				wrapper.classList.remove(styles.navSlideChange);
			}
		};
	};

	render() {
		return (
			<React.Fragment>
				<div id="TOP" className={styles.stopOverflow}>
					<nav id="navBar" className={styles.navClass}>
						<div className={styles.Logo}>
							<h4>The Nav</h4>
						</div>
						<ul id="wrapper">
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/">About</a>
							</li>
							<li>
								<a href="/">Help</a>
							</li>
							<li>
								<a href="/">Chat</a>
							</li>
							<li>
								<a href="/">Connect</a>
							</li>
						</ul>
						<div
							id="Burger"
							className={styles.Burger}
							role="button"
							tabIndex={0}
							onClick={this.navSlide}
							onKeyDown={this.navSlide}>
							<div className="Line1" />
							<div className="Line2" />
							<div className="Line3" />
						</div>
					</nav>
				</div>
			</React.Fragment>
		);
	}
}

export default Nav;
