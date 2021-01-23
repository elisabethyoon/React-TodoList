import { makeAutoObservable, observable, action } from "mobx";

class TodoStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable // state와 같은 역할
  todoList = [
    {
      id: 1,
      title: "할일1",
      isComplete: false,
      isUpdate: false
    },
    {
      id: 2,
      title: "할일2",
      isComplete: false,
      isUpdate: false
    }
  ];

  @observable
  inputValue = "";

  @action
  onChangeValue(value) {
    this.inputValue = value;
  }

  nextId = 3;

  @action
  addItem() {
    const item = {
      id: this.nextId++,
      title: this.inputValue,
      isComplete: false,
      isUpdate: false
    };
    const newList = this.todoList.concat(item);
    this.todoList = newList;

    // this.todoList = this.todoList.concat(item);
  }

  @action
  onChangeComplete(id) {
    const newLists = this.todoList.map((info) =>
      info.id === id ? { ...info, isComplete: !info.isComplete } : info
    );

    this.todoList = newLists;
  }
}

export default TodoStore;
