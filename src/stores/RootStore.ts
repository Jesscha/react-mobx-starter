import { ApplicationStore } from "./ApplicationStore";
import { MemoStore } from "./MemoStore";
import { TodoStore } from "./TodoStore";


export class RootStore {
  memoStore
  applicationStore
  todoStore
  constructor() {
    this.applicationStore = new ApplicationStore();
    this.memoStore = new MemoStore();
    this.todoStore = new TodoStore();
  }
 
}
