import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import TodoItem from "./TodoItem";
import { toJS } from "mobx";

@inject("todoStore")
@observer
class TodoList extends Component {
  // input check
  onChangeComplete = (id) => {
    const { todoStore } = this.props;
    todoStore.onChangeComplete(id);
  };
  render() {
    const { todoStore } = this.props;
    const { todoList } = todoStore;

    return (
      <ul className="todo-list">
        {todoList.map((list) => {
          console.log(list);
          return (
            <TodoItem
              key={list.id}
              list={list}
              onChangeComplete={this.onChangeComplete}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
