import React from 'react';
import Global from './Global';
import Search from './Search';
import SiteNavigation from './SiteNavigation';
import Slide from './Slide';
import Fixed from './Fixed';
import Take from './Take';
import Item from './Item';

class Header extends React.Component{
	render(){
		return(
			<div>
				<Global/>
				<Search/>
				<SiteNavigation/>
				<Slide/>
				<Fixed/>
				<Take/>	
				<Item/>
			</div>
		)
	}
}
export default Header;