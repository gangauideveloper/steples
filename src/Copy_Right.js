import React from 'react';
import './Footer.css'
class Copy_Right extends React.Component{
	render(){
		return(
			<div>
				<div className="Copy_Right">
					<p className="copy_content">
						<span>This Web site is intended for use by US residents only.</span>
						<span>See International Sites.</span>
						<span>See our delivery policy for full details.</span>
						<span>Copyright 1998-2019, Staples, Inc., All Rights Reserved.</span>
					</p>
					<p className="officeSupplies">
					  <span>Office Supplies | </span>
					  <span>School Supplies |</span>
					  <span>Business Cards  |</span>
					  <span>Site Map |</span>
					  <span>Privacy Policy|</span>
					  <span>Terms & Conditions  |</span>
					  <span>AdChoices  |</span>



					</p>
				</div>
			</div>
		)
	}
}
export default Copy_Right;