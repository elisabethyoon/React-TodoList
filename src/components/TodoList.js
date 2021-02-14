import React, { Component } from "react";
import { observer, inject } from "mobx-react";
// import TodoItem from "./TodoItem";

@inject("todoStore")
@observer
class TodoList extends Component {
  // isComplete input체크
  onChangeComplete = (id) => {
    const { todoStore } = this.props;
    todoStore.onChangeComplete(id);
  };

  // update버튼
  updateToggleForm = (id) => {
    const { todoStore } = this.props;
    todoStore.updateToggleForm(id);
  };

  // 수정완료 버튼
  onSubmitUpdateForm = (id, title) => {
    const { todoStore } = this.props;
    todoStore.onSubmitUpdateForm(id, title);
  };

  // 삭제버튼
  deleteItem = (id) => {
    const { todoStore } = this.props;
    todoStore.deleteItem(id);
  };
  render() {
    const { todoStore } = this.props;
    const { todoList, searchValue } = todoStore;
    const newTodo = todoList.filter((info) => {
      return info.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
    return (
      <ul className="todo-list">
        {newTodo.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              updateToggleForm={this.updateToggleForm}
              onChangeComplete={this.onChangeComplete}
              deleteItem={this.deleteItem}
              onSubmitUpdateForm={this.onSubmitUpdateForm}
            />
          );
        })}
      </ul>
    );
  }
}

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateValue: ""
    };
  }
  onUpdateValue = (e) => {
    const value = e.target.value;
    this.setState({
      updateValue: value
    });
  };

  // update버튼
  updateToggleForm = (id, title) => {
    this.setState({
      updateValue: title
    });
    this.props.updateToggleForm(id);
  };

  // 수정완료 버튼
  onSubmitUpdateForm = (id) => {
    this.props.onSubmitUpdateForm(id, this.state.updateValue);
  };
  render() {
    const { item, onChangeComplete, deleteItem } = this.props;

    return (
      <li className={item.isComplete ? "list-item active" : "list-item"}>
        {item.isUpdate ? (
          <>
            <div className="box-update">
              <input
                type="text"
                className="input-update"
                placeholder="todo를 적어주세요"
                value={this.state.updateValue}
                onChange={this.onUpdateValue}
              />
            </div>
            <div className="button">
              <button
                type="button"
                className="btn btn-ok"
                onClick={() => this.onSubmitUpdateForm(item.id)}
              ></button>
              <button
                type="button"
                className="btn btn-cancel"
                onClick={() => this.updateToggleForm(item.id)}
              ></button>
            </div>
          </>
        ) : (
          <>
            <div className="checked">
              <input
                type="checkbox"
                id="chk1"
                checked={item.isComplete}
                onChange={() => onChangeComplete(item.id)}
              />
            </div>
            <div className="text">{item.title}</div>

            <div className="button">
              <button
                type="button"
                className="btn btn-modify"
                onClick={() => this.updateToggleForm(item.id, item.title)}
              ></button>
              <button
                type="button"
                className="btn btn-delete"
                onClick={() => deleteItem(item.id)}
              ></button>
            </div>
          </>
        )}
      </li>
    );
  }
}

export default TodoList;
