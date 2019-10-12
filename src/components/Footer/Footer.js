import React, { Component } from 'react';
import styles from './footer.module.scss';
import { FaFacebookF } from 'react-icons/fa';
import { FaFacebookMessenger } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
class Footer extends Component {
	render() {
		return (
			<div className={styles.Bottom}>
				<div className={styles.firstFooterBox}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Impedit nisi esse expedita, tenetur autem praesentium
						quis nihil, voluptatem repudiandae veritatis at
						molestias quas eius deleniti earum, recusandae ducimus
						voluptate deserunt?
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Assumenda sunt perferendis soluta consequuntur
						dolor adipisci, sapiente dicta exercitationem culpa
						ducimus, harum veniam unde temporibus mollitia minima!
						Aut, optio itaque. Veritatis.
					</p>
				</div>
				<div className={styles.secondFooterBox}>
					<div>
						Using react-icons package, color of icons can be
						changed.
					</div>
					<ul>
						<li>
							<i>
								{''}
								<FaFacebookF />
							</i>
							<a href="/">Facebook</a>
						</li>
						<li>
							<i>
								{''}
								<FaFacebookMessenger />
							</i>
							<a href="/">Messenger</a>
						</li>
						<li>
							<i>
								{''}
								<FaTwitter />
							</i>
							<a href="/">Twitter</a>
						</li>
						<li>
							<i>
								{''}
								<FaWhatsapp />
							</i>
							<a href="/">WhatsApp</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Footer;
