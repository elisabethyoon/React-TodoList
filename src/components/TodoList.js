import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
	render() {
		const { todoLists, onChangeComplete, deleteItem, itemUpdate } = this.props;
		return (
			<ul className="todo-list">
				{todoLists.map((list) => (
					<TodoItem
						key={list.id}
						list={list}
						onChangeComplete={onChangeComplete}
						deleteItem={deleteItem}
						itemUpdate={itemUpdate}
					/>
				))}

			</ul>
		)
	}
}

export default TodoList
