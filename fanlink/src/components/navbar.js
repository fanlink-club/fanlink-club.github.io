import logo from './images/logo.svg';
import '../App.css';
export default function Navbar() {
    return (
		<div id="nav" >
			<img id="logo" src={logo} alt="Fanlink"></img>
			<div id="links">
				<p>ABOUT</p>
				<p>COURSES</p>
				<p>MENTORS & STAFF</p>
				<p>PRICING</p>
				<p>CONTACT</p>
				<p>LOG IN</p>
			</div>
		</div>
    )

}