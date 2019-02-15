import React from 'react';
import './Fixed.css';

class Fixed extends React.Component{
	render(){
		return(
			<div>
				<div className="fixed">
					<span className="Welcome">
						Welcome to Staples
					</span>
					<span className="wantfree">
						Want Free Next-Day Delivery with NO MIN?
					</span>
					<span className="Join">
						Join Staples Plus! Exclusions apply.
					</span>
				</div>
				<div className="buttons">
					<button className="input1">
						Sign In
					</button>
					<button  className="input2">
						Create Account
					</button>
				</div>
			</div>
		)
	}
}
export default Fixed;
