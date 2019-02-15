import React from 'react';
import './Search.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
class Search extends React.Component{
	render(){
		return(
			<div>
				<div className="Main">
					<Logo/>
					<SearchBar/>
				</div>
				<div className="blank">
				</div>
			</div>
		)
	}
}
export default Search;