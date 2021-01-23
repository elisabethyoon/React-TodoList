import React, { Component } from "react";
import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [
        {
          id: 1,
          title: "할일1111",
          isComplete: false,
          isUpdate: false
        },
        {
          id: 2,
          title: "할일2",
          isComplete: false,
          isUpdate: false
        },
        {
          id: 3,
          title: "할일3",
          isComplete: false,
          isUpdate: false
        }
      ]
    };
  }

  render() {
    const { todoLists } = this.state;
    return (
      <div className="container">
        <div className="wrapper">
          <header>TodoList</header>
          <div className="content">
            <InsertForm />
            <TodoList lists={todoLists} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
