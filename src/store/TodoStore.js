import { makeAutoObservable, observable, action } from "mobx";
import { toJS } from "mobx";

class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  todoList = [
    {
      id: 1,
      title: "todo1",
      isComplete: false,
      isUpdate: false
    },
    {
      id: 2,
      title: "todo2",
      isComplete: false,
      isUpdate: false
    },
    {
      id: 3,
      title: "todo3",
      isComplete: false,
      isUpdate: false
    }
  ];

  @observable
  inputValue = "";

  nextId = 4;

  // todolist등록
  @action
  addItem() {
    const newItem = {
      id: this.nextId++,
      title: this.inputValue,
      isComplete: false,
      isUpdate: false
    };
    const newTodoList = this.todoList.concat(newItem);
    this.todoList = newTodoList;
    this.inputValue = "";
  }

  // input Value값
  @action
  onChangeValue(value) {
    this.inputValue = value;
  }

  // isComplete input체크
  @action
  onChangeComplete(id) {
    const newTodoList = this.todoList.map((item) =>
      id === item.id ? { ...item, isComplete: !item.isComplete } : item
    );

    this.todoList = newTodoList;
  }

  // 수정버튼
  @action
  onUpdateForm(id) {
    const newTodoList = this.todoList.map((item) =>
      id === item.id ? { ...item, isUpdate: !item.isUpdate } : item
    );

    this.todoList = newTodoList;
  }

  // 수정 inpur value
  @action
  onUpdateValue(value) {
    console.log(toJS(value));
    // this.todoList.title = value;
  }

  // 삭제버튼
  @action
  deleteItem(id) {
    const newTodoList = this.todoList.filter((item) => {
      return id !== item.id ? { ...item } : null;
    });
    this.todoList = newTodoList;
  }
}

export default TodoStore;
