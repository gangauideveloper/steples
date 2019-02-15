import React from 'react';
import './Item.css';
class Mapping extends React.Component{
	constructor(props){
		super(props);
			this.state = {
				cart:[
					{img:"./Cart/1.png",Name:"Office Supplies"},
					{img:"./Cart/2.png",Name:"Office Supplies"},
					{img:"./Cart/3.png",Name:"Office Supplies"},
					{img:"./Cart/4.png",Name:"Office Supplies"}
				]
			}	
	}
	render(){
		return(
			<div>
				<div className="popular_categories">
					<span> Popular Categories</span>	
				</div>
				<div>
					<div >
						{
							this.state.cart.map((value,index)=>
								<div className="fst_cart">
									<img src={value.img}/>
									<p>{value.Name}</p>
								</div>
								)
						}
					</div>
				</div>
			</div>
		)
	}
}
export default Mapping;