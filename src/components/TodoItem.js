import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { list, onChangeComplete } = this.props;
    return (
      <li className="list-item">
        {/* 수정 input폼  <div>
          <input type="text" placeholder="todo를 적어주세요" />
        </div> */}

        <div className="text">{list.title}</div>
        <div className="checked">
          <input
            type="checkbox"
            id="chk1"
            onChange={() => onChangeComplete(list.id)}
          />
        </div>

        <div className="button">
          <button type="button" className="btn btn-modify">
            수정
          </button>
          <button type="button" className="btn btn-delete">
            삭제
          </button>
        </div>
        {/* 수정눌렀을경우 */}
        {/* <div className="button">
                  <button
                    type="button"
                    className="btn btn-ok"
                  >
                    확인
                    </button>
                  <button
                    type="button"
                    className="btn btn-cancel"
                  >
                    취소
                    </button>
                </div> */}
        {/* 수정눌렀을경우 */}
      </li>
    );
  }
}

export default TodoItem;
