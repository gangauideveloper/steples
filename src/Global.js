import React from 'react';
import './Global.css';

class Global extends React.Component{
	render(){
		return(
			<div>
				<div className="row">
					<div className="col1">
						<span>Staples Sites</span>
					</div>
					<div className="col2">
						<a href="#">20+ Employees</a>
					</div>
					<div className="col3">
						<span id="store">Your Store:&nbsp;</span>
						<span id="Framingham"><strong>Framingham, MA</strong> </span>
						<span id="open">Open 8am - 9pm</span>
					</div>
					<div className="col4">
						<a> <b>Weekly Ad</b></a>
					</div>
				</div>
			</div>
		);
	}
}
export default Global;