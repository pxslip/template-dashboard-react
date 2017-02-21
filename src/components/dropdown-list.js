import _ from 'lodash';
import React from 'react';
import DropDownListItem from './dropdown-list-item';

export default class DropDownList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
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
		const props = _.omit(this.props, 'dropDown');

		return _.map(this.props.dropDown, (todo, index) => <DropDownListItem key={index} {...todo} {...this.props} />);
	}

	render() {
		return (
			<div className={this.isActive()} onClick={this.handleClick.bind(this)}>
				<ul className="demo-site-nav-list">
					{this.renderItems()}
				</ul>
			</div>
		);
	}
}