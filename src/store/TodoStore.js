import { makeAutoObservable, observable, action } from "mobx";

class TodoStore {
  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  @observable
  todoList = [
    {
      id: 1,
      title: "React",
      isComplete: false,
      isUpdate: false
    },
    {
      id: 2,
      title: "Mobx",
      isComplete: false,
      isUpdate: false
    }
  ];
  nextId = 4;

  @observable
  inputValue = "";

  // 검색어
  @observable
  searchValue = "";

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

  // 검색 input
  @action
  onChangeSearchValue(value) {
    this.searchValue = value;
  }

  // isComplete input체크
  @action
  onChangeComplete(id) {
    const newTodoList = this.todoList.map((item) =>
      id === item.id ? { ...item, isComplete: !item.isComplete } : item
    );

    this.todoList = newTodoList;
  }

  // update버튼
  @action
  updateToggleForm(id, title) {
    const newTodoList = this.todoList.map((item) =>
      id === item.id ? { ...item, isUpdate: !item.isUpdate } : item
    );

    this.todoList = newTodoList;
  }

  // 수정완료 버튼
  @action
  onSubmitUpdateForm(id, title) {
    const newTodolist = this.todoList.map((item) =>
      item.id === id ? { ...item, title, isUpdate: !item.isUpdate } : item
    );

    this.todoList = newTodolist;
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
