import { makeAutoObservable } from "mobx";

export class ApplicationStore {
  // makeAutoObservable에 의해서 관찰되는 상태가 된다.
  counter = 0;

  constructor() {
    // 이 객체의 상태를 observable하게 만들어 준다.
    makeAutoObservable(this);
  }
  // 액션을 호출한다.
  increment = () => {
    this.counter += 1;
  };

  decrement = () => {
    this.counter -= 1;
  };
}
