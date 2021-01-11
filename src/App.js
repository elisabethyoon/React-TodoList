import React, { Component } from "react";
import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";
import { tsObjectKeyword } from "@babel/types";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			todoLists: [
				{
					id: 1,
					text: '할일1',
					isComplete: false,
					isUpdate: false,
				},
				{
					id: 2,
					text: '할일2',
					isComplete: false,
					isUpdate: false,
				},
				{
					id: 3,
					text: '할일3',
					isComplete: false,
					isUpdate: false,
				},
			],
			nexdId: 4,
		};
	}
	onChangeValue = (e) => {
		const value = e.target.value;
		this.setState({
			inputValue: value
		})
	}
	onChangeComplete = (id) => {
		// 수정은 map함수
		// 등록 or 추가 concat함수
		// 삭제 filter함수
		const newItems = this.state.todoLists.map((item) => {
			return id === item.id ? { ...item, isComplete: !item.isComplete } : item

		})
		console.log(newItems);

		this.setState({
			todoLists: newItems
		})
	}

	deleteItem = (selectedId) => {
		const newDeleteItem = this.state.todoLists.filter((list) => {
			return list.id !== selectedId ? list : null
			// if (list.id !== selectedId) {
			// 	return list
			// }
		});
		this.setState({
			todoLists: newDeleteItem
		})
	}

	// 등록하기
	onSubmitItem = () => {
		console.log('등록');
		console.log(this.state.inputValue);
		const newItem = {
			id: this.state.nexdId,
			text: this.state.inputValue,
			isComplete: false,
			isUpdate: false,
		}
		const newLists = [
			...this.state.todoLists, newItem
		];

		this.setState({
			todoLists: newLists,
			nexdId: this.state.nexdId + 1,
			inputValue: '',
		})
	}

	// 수정폼 변경
	itemUpdate = (selectedId) => {
		console.log(selectedId);
		const newTodoLists = this.state.todoLists.map((list) => {
			if (list.id === selectedId) {
				return { ...list, isUpdate: !list.isUpdate }
			} else {
				return list
			}
		})
		this.setState({
			todoLists: newTodoLists
		})
	}

	// 업데이트 수정완료 버튼
	updateSubmitForm = (id, updateValue) => {
		const newlists = this.state.todoLists.map((list) => {
			if (list.id === id) {
				return { ...list, text: updateValue, isUpdate: false }
			} else {
				return list
			}
		})
		this.setState({
			todoLists: newlists,
		})
	}
	render() {
		return (
			<div className="container">
				<div className="wrapper">
					<header>TodoList</header>
					<div className="content">
						<InsertForm
							inputValue={this.state.inputValue}
							onChangeValue={this.onChangeValue}
							onSubmitItem={this.onSubmitItem}
						/>
						<TodoList
							todoLists={this.state.todoLists}
							onChangeComplete={this.onChangeComplete}
							deleteItem={this.deleteItem}
							itemUpdate={this.itemUpdate}
							updateSubmitForm={this.updateSubmitForm}
						></TodoList>
					</div>
				</div>
			</div>
		);
	}
}

export default App;