import React from 'react';
import Header from './header';
import DropDownList from './dropdown-list';
import ThemeList from './theme-list';

export default class App extends React.Component {

	render() {
		return (
			<div id="editWindow">
				<Header />
				<DropDownList />
				<ThemeList />
			</div>
		);
	}
}