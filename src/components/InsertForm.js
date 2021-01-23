import React, { Component } from "react";

class InsertForm extends Component {
  render() {
    return (
      <div className="insert">
        <input type="text" placeholder="Todo를 입력해주세요" />
        <button className="btn btn-add">등록</button>
      </div>
    );
  }
}

export default InsertForm;
