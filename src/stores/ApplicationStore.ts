import { makeAutoObservable } from "mobx";
import { MemoStore } from "./MemoStore";

export class ApplicationStore {
  // makeAutoObservable에 의해서 관찰되는 상태가 된다.
  counter = 0;
  // memoStore 

  constructor() {
    // 이 객체의 상태를 observable하게 만들어 준다.
    makeAutoObservable(this);
    // // ApplicationStore에서 MemoStore를 접근 가능하게 만든다.
    // this.memoStore = new MemoStore();
  }
  // 액션을 호출한다.
  increment = () => {
    this.counter += 1;
  };

  decrement = () => {
    this.counter -= 1;
  };
}
