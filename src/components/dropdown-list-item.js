import React from 'react';

export default class DropDownListItem extends React.Component {

	render() {
		return (
			<li className="demo-site-nav-list-item" onClick={this.dropDownClick.bind(this)}>
				{this.props.label}
			</li>
		);
	}

	dropDownClick(event) {
		event.preventDefault();
		window.open(this.props.url, "_self");
	}
}