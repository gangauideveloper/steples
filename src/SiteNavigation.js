import React from 'react';
import './SiteNavigation.css';
class SiteNavigation extends React.Component{
	render(){
		return(
			<div className="flyout">
				<ul>
					<li><b>Products</b></li>
					<li><b>Services & Solutions</b></li>
					<li><b>Deals</b></li>
					<li><b>Business Expertise</b></li>
					<li><b>Membership</b></li>
				</ul>

			</div>
		)
	}
}
export default SiteNavigation;