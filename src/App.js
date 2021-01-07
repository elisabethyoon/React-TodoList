import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <header>TodoList</header>
          <div className="content">
            <div className="insert">
              <form>
                <input type="text" placeholder="Todo를 입력해주세요" />
                <button className="btn btn-add">등록</button>
              </form>
            </div>
            <ul className="todo-list">
              <li className="list-item active">
                <div className="text">todoList</div>
                <div className="checked">
                  <input type="checkbox" id="chk1" />
                </div>
                <div className="button">
                  <button type="button" className="btn btn-modify">
                    수정
                  </button>
                  <button type="button" className="btn btn-delete">
                    삭제
                  </button>
                </div>
              </li>
              <li className="list-item">
                <div className="text">todoList</div>
                {/* 수정 */}
                {/* <div>
                  <input
                    type="text"
                    placeholder="todo를 적어주세요"
                  />
                </div> */}
                <div className="checked">
                  <input type="checkbox" id="chk1" />
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
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
