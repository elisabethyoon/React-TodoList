import React, { Component } from "react";
import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			todoLists: [
				{
					id: 1,
					text: '할일1',
					isComplete: false
				},
				{
					id: 2,
					text: '할일2',
					isComplete: false
				},
				{
					id: 3,
					text: '할일3',
					isComplete: false
				},
			],
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
			if (item.id === id) {
				return { ...item, isComplete: !item.isComplete }
			} else {
				return item;
			}
		})
		console.log(newItems);

		this.setState({
			todoLists: newItems
		})
	}
	render() {
		return (
			<div className="container">
				<div className="wrapper">
					<header>TodoList</header>
					<div className="content">
						<InsertForm inputValue={this.state.inputValue} onChangeValue={this.onChangeValue} />
						<TodoList
							todoLists={this.state.todoLists}
							onChangeComplete={this.onChangeComplete}
						></TodoList>
					</div>
				</div>
			</div>
		);
	}
}

export default App;