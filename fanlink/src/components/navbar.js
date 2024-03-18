import { NavLink } from 'react-router-dom';

import logo from './images/logo.svg';
import '../App.css';

export default function Navbar() {
    return (
		<div id="nav" >
			<NavLink className={"navbar"} to="/">
				<img id="logo" src={logo} alt="Fanlink"></img>	
			</NavLink>
			<div id="links">
				<NavLink className={"navbar"} to="/about">ABOUT</NavLink>
				<NavLink className={"navbar"} to="/courses">COURSES</NavLink>
				<NavLink className={"navbar"} to="/">MENTORS & STAFF</NavLink>
				<NavLink className={"navbar"} to="/">PRICING</NavLink>
				<NavLink className={"navbar"} to="/">CONTACT</NavLink>
				<NavLink className={"navbar"} to="/">LOG IN</NavLink>
			</div>
		</div>
    )

}