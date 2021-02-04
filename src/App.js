import React, { Component } from "react";
import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          {/* <header>TodoList</header> */}
          <div className="top-contents">
            <h1 className="top-title">
              Hello, <br /> Betty
            </h1>
            <p className="date">Feb 3, 2021</p>
          </div>
          <div className="content">
            <InsertForm />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
