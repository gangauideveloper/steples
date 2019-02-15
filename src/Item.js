import React from 'react';
import './Item.css';


class Item extends React.Component{
	render(){
		return(
			<div>
				
				<div className="popular_categories">
					<span> Popular Categories</span>	
				</div>
				<div className="all_cart">
					<div className="fst_cart">
						<img src={"./Cart/1.png"}/>
						<div className="category_content">
							<a href="#"><p>Office Supplies</p></a>
							<a href="#" className="subcategory_content">Writing Supplies</a><br/>
							<a href="#" className="subcategory_content">Calendars & Planners</a><br/>
							<a href="#" className="subcategory_content">Office Basics</a>
						</div>
					</div>
					<div className="fst_cart">
						<img src={"./Cart/2.png"}/>
						<div className="category_content">
							<a href="#"><p>Furniture</p></a>
							<a href="#" className="subcategory_content">Chairs & Seating</a><br/>
							<a href="#" className="subcategory_content">Desks</a><br/>
							<a href="#" className="subcategory_content">Tables</a>
						</div>
					</div>
					<div className="fst_cart">
						<img src={"./Cart/3.png"}/>
						<div className="category_content">
							<a href="#"><p>Food & Breakroom</p></a>
							<a href="#" className="subcategory_content">Coffee & Supplies</a><br/>
							<a href="#" className="subcategory_content">Water & Beverages</a><br/>
							<a href="#" className="subcategory_content">Food & Snacks</a>
						</div>
					</div>
					<div className="fst_cart">
						<img src={"./Cart/4.png"}/>
						<div className="category_content">
							<a href="#"><p>Computers</p></a>
							<a href="#" className="subcategory_content">Laptops</a><br/>
							<a href="#" className="subcategory_content">Desktops</a><br/>
							<a href="#" className="subcategory_content">Computer Accessories</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Item;