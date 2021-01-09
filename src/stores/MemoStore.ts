import { makeAutoObservable } from "mobx";


export class MemoStore {
  
  memos  = [] as Array<string>


  constructor() {
    makeAutoObservable(this);
  }
  
  addMemo(memo: string) {
      this.memos.push(memo);
      
  } 
}
