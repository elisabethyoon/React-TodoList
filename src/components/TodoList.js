import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    console.log(this.props, "list");
    const { lists } = this.props;
    return (
      <ul className="todo-list">
        {lists.map((list) => {
          const { id, title, isComplete } = list;
          return <TodoItem key={id} title={title} isComplete={isComplete} />;
        })}
      </ul>
    );
  }
}

export default TodoList;
