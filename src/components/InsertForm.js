import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class InsertForm extends Component {
  onChangeValue = (e) => {
    const value = e.target.value;
    this.props.todoStore.onChangeValue(value);
  };

  addItem = () => {
    this.props.todoStore.addItem();
  };

  render() {
    const { todoStore } = this.props;
    const { inputValue } = todoStore;
    return (
      <div className="insert">
        <input
          type="text"
          placeholder="Todo를 입력해주세요"
          value={inputValue}
          onChange={this.onChangeValue}
        />
        <button className="btn btn-add" onClick={this.addItem}>
          등록
        </button>
      </div>
    );
  }
}

export default InsertForm;
