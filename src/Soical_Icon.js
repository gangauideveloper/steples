import React from 'react';
import './Footer.css'
class Soical_Icon extends React.Component{
	render(){
		return(
			<div>
				<div className="Soical_Icon">
					<div className="Join_us">
						<span className="inside_span">Join Us On</span><br/>
						<div className="ftpi_icon">
							<span className="fa fa-facebook Icon1"></span>&nbsp;&nbsp;
							<span className="fa fa-twitter Icon2"></span>&nbsp;&nbsp;
							<span className="fa fa-pinterest-p Icon3"></span>&nbsp;&nbsp;
							<span className="fa fa-linkedin Icon4"></span>
						</div>
					</div>
					<div className="Join_us">
						<span className="inside_span">Download our Mobile App</span><br/>
						<div className="ftpi_icon">
							<span className="fab fa-apple Icon5"></span>&nbsp;&nbsp;
							<span className="fab fa-android Icon6"></span>&nbsp;&nbsp;
						</div>
					</div>
					<div className="Join_us">
						<span className="inside_span">Staples Offers</span><br/>
						<div className="ftpi_icon">
							<input type="text" placeholder="Enter email address" className="input_offer"/>
							<button className="Subscribe">Subscribe</button>
						</div>
					</div>


				</div>
			</div>
		)
	}
}
export default Soical_Icon;