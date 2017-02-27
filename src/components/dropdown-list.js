import React from 'react';
import DropDownListItem from './dropdown-list-item';

const dropDown = [
	{
		label: 'Article',
		url: 'http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/article',
		active: true
	},
	{
		label: 'Native Ad',
		url: 'http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/native/',
		active: false
	},
	{
		label: 'Embedded - Center',
		url: 'http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/embedded/Center',
		active: false
	},
	{
		label: 'Embedded - Dark',
		url: 'http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/embedded/Dark',
		active: false
	},
	{
		label: 'Embedded - Light',
		url: 'http://productdevelopment.techtarget.com/projects/custom/prototypes/sales-tools/embedded/Light',
		active: false
	}
]

export default class DropDownList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dropDown,
			hide: true
		};
	}

	isActive() {
		return 'demo-site-nav ' +((this.state.hide) ? 'hideNav' : 'show');
	}

	handleClick() {
		if (this.state.hide) {
			this.setState({ hide: false });
		} else {
			this.setState({ hide: true });
		}
	}

	renderItems() {

		return (
			this.state.dropDown.map(function(val, index) {
				return <DropDownListItem key={index} {...val} />;
			})
		)

	}

	render() {
		return (
			<div className={this.isActive()} onClick={this.handleClick.bind(this)}>
				<ul className="demo-site-nav-list">
					{this.renderItems()}
				</ul>
				<i className="icon icon-arrow-down" data-icon="5"></i>
			</div>
		);
	}
}