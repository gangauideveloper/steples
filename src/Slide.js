import React from 'react';
import { Fade } from 'react-slideshow-image';
import './Slide.css';

class Slide extends React.Component{
	render(){
		return(
			<div>
				<div class="slide">
					<img src={"./img/1slide.jpg"}/>
				</div>
				
			</div>
		)
	}
}
export default Slide;