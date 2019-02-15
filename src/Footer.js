import React from 'react';
import './Footer.css'
import Media_Link from './Media_Link';
import Soical_Icon from './Soical_Icon';
import Copy_Right from './Copy_Right';

class Footer extends React.Component{
	render(){
		return(
			<div class="main">
				<div className="footer">
					<Media_Link/>
					<Soical_Icon/>
					<Copy_Right/>
				</div>
			</div>
		)
	}
}
export default Footer;