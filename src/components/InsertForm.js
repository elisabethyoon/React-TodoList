import React, { Component } from "react";
import { observer, inject } from "mobx-react";

@inject("todoStore")
@observer
class InsertForm extends Component {
  addItem = () => {
    const { todoStore } = this.props;
    todoStore.addItem();
  };

  onChangeValue = (e) => {
    const value = e.target.value;
    const { todoStore } = this.props;
    todoStore.onChangeValue(value);
  };

  onChangeSearchValue = (e) => {
    const value = e.target.value;
    const { todoStore } = this.props;
    todoStore.onChangeSearchValue(value);
  };
  render() {
    const { todoStore } = this.props;
    const { inputValue, searchValue } = todoStore;
    return (
      <div className="wrap-top-input">
        <div className="insert">
          <input
            type="text"
            placeholder="Todo를 입력해주세요"
            value={inputValue}
            onChange={this.onChangeValue}
          />
          <button className="btn btn-add" onClick={this.addItem}></button>
        </div>
        <input
          type="text"
          placeholder="검색"
          value={searchValue}
          onChange={this.onChangeSearchValue}
          className="input-search"
        />
      </div>
    );
  }
}

export default InsertForm;
