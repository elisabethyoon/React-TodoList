import React, { Component } from 'react'

class InsertForm extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="insert">
				<input
					type="text"
					placeholder="Todo를 입력해주세요"
					value={this.props.inputValue}
					onChange={this.props.onChangeValue}
				/>
				<button
					className="btn btn-add"
					onClick={this.props.onSubmitItem}
				>등록</button>
			</div>
		)
	}
}

export default InsertForm
