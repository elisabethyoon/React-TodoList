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

  // 수정버튼
  onUpdateForm = (id) => {
    // console.log(id, "update");
    const { todoStore } = this.props;
    todoStore.onUpdateForm(id);
  };

  // 삭제버튼
  deleteItem = (id) => {
    const { todoStore } = this.props;
    todoStore.deleteItem(id);
  };
  render() {
    const { todoStore } = this.props;
    const { todoList } = todoStore;
    return (
      <ul className="todo-list">
        {todoList.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item}
              onUpdateForm={this.onUpdateForm}
              onChangeComplete={this.onChangeComplete}
              deleteItem={this.deleteItem}
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
  onUpdateForm = (id, title) => {
    this.setState({
      updateValue: title
    });
    this.props.onUpdateForm(id);
  };
  render() {
    const { item, onChangeComplete, deleteItem } = this.props;
    // const { updateValue } = this.state;

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
              <button type="button" className="btn btn-ok"></button>
              <button
                type="button"
                className="btn btn-cancel"
                onClick={() => this.onUpdateForm(item.id)}
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
                onClick={() => this.onUpdateForm(item.id, item.title)}
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
