import React, { Component } from 'react'

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			updateValue: ''
		}

	}
	updateToggle = (id, text) => {
		this.props.itemUpdate(id);
		console.log(text);
		this.setState({
			updateValue: text
		})
	}
	onChangeUpdateValue = (e) => {
		this.setState({
			updateValue: e.target.value
		})
	}
	render() {
		const { list, onChangeComplete, deleteItem, itemUpdate, updateSubmitForm } = this.props;
		const { updateValue } = this.state;
		const { id, text, isComplete, isUpdate } = list;
		return (
			<li className={isComplete ? 'list-item active' : 'list-item'}>
				{isUpdate ? (
					<div>
						<input
							type="text"
							placeholder="todo를 적어주세요"
							value={updateValue}
							onChange={this.onChangeUpdateValue}
						/>
					</div>
				) : (
						<div className="text">{text}</div>
					)}
				<div className="checked">
					<input type="checkbox" id="chk1" value={isComplete} onChange={() => onChangeComplete(id)} />
				</div>
				{isUpdate ? (
					<div className="button">
						<button type="button" className="btn btn-ok" onClick={() => updateSubmitForm(id, updateValue)}>수정완료</button>
						<button type="button" className="btn btn-cancel" onClick={() => itemUpdate(id)}>취소</button>
					</div>
				) : (
						<div className="button">
							<button type="button" className="btn btn-modify" onClick={() => this.updateToggle(id, text)}>수정</button>
							{isComplete ? <button type="button" className="btn btn-delete" onClick={() => deleteItem(id)} >삭제</button> : null}
						</div>
					)}
			</li>

		)
	}
}

export default TodoItem
