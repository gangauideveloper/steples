import React from 'react';
import './Take.css';
//import './Fixed.css';
class Take extends React.Component{
	render(){
		return(
			<div>
				<div className="banner">
					<img src={"./img2/1.png"}/>
					<div className="content">
						<span>
							Take care of business.
						</span>
						<p id="stay">
							Stay ahead of schedule with the right essentials by your side.
						</p>
						<button className="shopnow">
							SHOP NOW 
						</button>
					</div>
				</div>
				<div className="second">
					<img src={"./img2/2.png"}/>					
					<div className="content">
						<span>
							Hundreds of deals in store!
						</span>
						<p id="stay">
							Stop in this week to find extra savings.
						</p>
						<button className="weekly">
							VIEW WEEKLY AD
						</button>
					</div>
				</div>
			</div>
		)
	}
}
export default Take;