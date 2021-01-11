import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
	render() {
		const { todoLists, onChangeComplete, deleteItem, itemUpdate, updateSubmitForm } = this.props;
		return (
			<ul className="todo-list">
				{todoLists.map((list) => (
					<TodoItem
						key={list.id}
						list={list}
						onChangeComplete={onChangeComplete}
						deleteItem={deleteItem}
						itemUpdate={itemUpdate}
						updateSubmitForm={updateSubmitForm}
					/>
				))}

			</ul>
		)
	}
}

export default TodoList
