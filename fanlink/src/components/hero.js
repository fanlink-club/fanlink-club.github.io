import left from './images/left.svg';
import right from './images/right.svg';
import '../App.css';
import React, { useState } from "react";

export default function Hero() {	
    return (
		<div id="hero" >
			<img id="left" src={left} alt="Colorful, fuzzy, decorative shapes"></img>
			<div id="hero-text">
				<div>Fan Clubs for</div>
				<div id="marquee">authenticity</div>
				<div id="button">Explore Fanlinks</div>
			</div>
			<img id="right " src={right} alt="Colorful, fuzzy, decorative shapes"></img>
		</div>
    )

}