import React, { Component } from 'react'

class InsertForm extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="insert">
				<form>
					<input type="text" placeholder="Todo를 입력해주세요" value={this.props.inputValue} onChange={this.props.onChangeValue} />
					<button className="btn btn-add">등록</button>
				</form>
			</div>
		)
	}
}

export default InsertForm
