import React, { Component } from 'react'
import styles from './nav.module.scss'

class Nav extends Component {
	navSlide = () => {
		//getting all the dom elements
		const burger = document.getElementById('Burger')
		const wrapper = document.getElementById('wrapper')
		const listElement = document
			.getElementById('wrapper')
			.getElementsByTagName('li')

		// toggling animation
		wrapper.classList.toggle(styles.animateNav)
		burger.classList.toggle(styles.toggle)

		//adding fade in animation for nav links
		for (let i = 0; i < listElement.length; i++) {
			if (listElement[i].style.animation) {
				listElement[i].style.animation = ''
			} else {
				listElement[i].style.animation = `${
					styles.navLinkFade
				} 0.5s ease forwards ${i / 7 + 0.5}s `
			}
		}
	}
	render() {
		return (
			<React.Fragment>
				<div className={styles.stopOverflow}>
					<nav className={styles.navClass}>
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
							onClick={this.navSlide}>
							<div className="Line1"></div>
							<div className="Line2"></div>
							<div className="Line3"></div>
						</div>
					</nav>
				</div>
			</React.Fragment>
		)
	}
}

export default Nav
