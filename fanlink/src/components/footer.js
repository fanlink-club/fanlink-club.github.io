import { NavLink } from 'react-router-dom';

import logo from './images/logo-white.svg';
import '../App.css';

export default function Footer() {
    return (
		<div id="footer">
			<div id="footer-row">
				<NavLink className={"navbar"} to="/">
					<img id="footer-logo" src={logo} alt="Fanlink"></img>	
				</NavLink>
				<div id="explore-button">Join our mailing list!</div>
			</div>
			<div id="footer-row">
				<div id="footer-col">
					<NavLink id="footer-link" to="/about">About Fanlink</NavLink>
					<NavLink id="footer-link">Origin</NavLink>
					<NavLink id="footer-link">History</NavLink>
					<NavLink id="footer-link">Mentors and Staff</NavLink>
				</div>
				<div id="footer-col">
					<NavLink id="footer-link" to="/courses">Courses</NavLink>
					<NavLink id="footer-link">Calendar</NavLink>
					<NavLink id="footer-link">Pricing</NavLink>
					<NavLink id="footer-link">Refer a Friend</NavLink>
				</div>
				<div id="footer-col">
					<NavLink id="footer-link">Contact Us</NavLink>
					<NavLink id="footer-link">Suggest a Fanlink</NavLink>
					<NavLink id="footer-link">Membership</NavLink>
					<NavLink id="footer-link">Member Log-in</NavLink>
				</div>
				<div id="footer-col">
					<NavLink id="footer-link">Follow Us!</NavLink>
					<NavLink id="footer-link">YouTube</NavLink>
					<NavLink id="footer-link">Instagram</NavLink>
					<NavLink id="footer-link">Twitter</NavLink>
				</div>
			</div>
			<div id="copyright">
			© 2024 Fanlink
			</div>
		</div>
    )

}