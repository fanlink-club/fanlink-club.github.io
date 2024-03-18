import left from './images/left.svg';
import right from './images/right.svg';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Hero = () => {	
    return (
		<div id="hero" >
			<img id="left" src={left} alt="Colorful, fuzzy, decorative shapes"></img>
			<div id="hero-text">
				<div>Fan Clubs for</div>
				<div id="marquee">authenticity</div>
				<NavLink id="explore-button" to="/courses">
					Explore Fanlinks
				</NavLink>
			</div>
			<img id="right" src={right} alt="Colorful, fuzzy, decorative shapes"></img>
		</div>
    )

}

export default Hero;