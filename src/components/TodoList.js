import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
	render() {
		console.log(this.props)
		return (
			<ul className="todo-list">
				{this.props.todoLists.map((list) => (
					<TodoItem key={list.id} list={list}
						onChangeComplete={this.props.onChangeComplete} />
				))}

			</ul>
		)
	}
}

export default TodoList
