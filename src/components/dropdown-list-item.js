import React from 'react';

export default class DropDownListItem extends React.Component {

	render() {
		if (this.props.active) {
			return (
				<li className="demo-site-nav-list-item selected">
					{this.props.label}
				</li>
			)
		}
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