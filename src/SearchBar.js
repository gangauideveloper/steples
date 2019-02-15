import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component{
	render(){
		return(
			<div>
				<form className="form">
					<input type="text" placeholder="Search for all your business needs"/>
				</form>
				<div>
					<button>
					<span class="fab fa-sistrix "></span>
					</button>
				</div>
				<div className="signIn">
					<div>
						<span Id="reorder">Reorder</span>
					</div>
					<div Id="sign">
						<span className="fa fa-user-o user"></span>
						<p>Sign In</p>
					</div>
					<div Id="connect">
						<span className="fa fa-comment-o connect"></span>
						<p>Connect</p>
					</div>
					<div id="cart">
						<span className="fa fa-shopping-cart shop"></span>
						<p>Cart</p>
					</div>
				</div>
			</div>
		)
	}
}
export default SearchBar;