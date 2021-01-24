import React, { Component } from "react";
import { observer, inject } from "mobx-react";
// import TodoItem from "./TodoItem";
import { toJS } from "mobx";

@inject("todoStore")
@observer
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateValue: ""
    };
  }
  // isComplete input체크
  onChangeComplete = (id) => {
    const { todoStore } = this.props;
    todoStore.onChangeComplete(id);
  };

  // 수정버튼
  onUpdateForm = (id, title) => {
    // console.log(id, "update");
    const { todoStore } = this.props;
    todoStore.onUpdateForm(id);
    this.setState({
      updateValue: title
    });
  };

  // 수정input value
  onUpdateValue = (e) => {
    const value = e.target.value;
    // const { todoStore } = this.props;
    // todoStore.onUpdateValue(value);
    this.setState({
      updateValue: value
    });
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
            <li
              className={item.isComplete ? "list-item active" : "list-item"}
              key={item.id}
            >
              {item.isUpdate ? (
                <>
                  <div>
                    <input
                      type="text"
                      value={this.state.updateValue}
                      placeholder="todo를 적어주세요"
                      onChange={this.onUpdateValue}
                    />
                  </div>
                  <div className="button">
                    <button type="button" className="btn btn-ok">
                      수정완료
                    </button>
                    <button
                      type="button"
                      className="btn btn-cancel"
                      onClick={() => this.onUpdateForm(item.id)}
                    >
                      취소
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="text">{item.title}</div>
                  <div className="checked">
                    <input
                      type="checkbox"
                      id="chk1"
                      onChange={() => this.onChangeComplete(item.id)}
                    />
                  </div>

                  <div className="button">
                    <button
                      type="button"
                      className="btn btn-modify"
                      onClick={() => this.onUpdateForm(item.id, item.title)}
                    >
                      수정
                    </button>
                    <button
                      type="button"
                      className="btn btn-delete"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      삭제
                    </button>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
