import React from 'react';
import Header from './header';
import DropDownList from './dropdown-list';

const dropDown = [
	{
		label: 'Article',
		url: 'http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/article'
	},
	{
		label: 'Native Ad',
		url: 'http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/native/'
	},
	{
		label: 'Embedded - Center',
		url: 'http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/embedded/Center'
	},
	{
		label: 'Embedded - Dark',
		url: 'http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/embedded/Dark'
	},
	{
		label: 'Embedded - Light',
		url: 'http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/embedded/Light'
	}
]

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dropDown
		};
	}

	render() {
		return (
			<div id="editWindow">
				<Header />
				<DropDownList dropDown={this.state.dropDown} />
			</div>
		);
	}
}