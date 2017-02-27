import React from 'react';

export default class ThemeSelectList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: 'white'};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div className="demo-settings">
				<form onSubmit={this.handleSubmit}>
					<label>
						Select A Header Color
						<select value={this.state.value} onChange={this.handleChange}>
							<option value="white">White</option>
							<option value="black">Black</option>
						</select>
					</label>
				</form>
			</div>
		);
	}
}