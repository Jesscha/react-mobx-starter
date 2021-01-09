import { ApplicationStore } from "./ApplicationStore";
import { MemoStore } from "./MemoStore";



export class RootStore {
  memoStore
  applicationStore
  constructor() {
    this.applicationStore = new ApplicationStore();
    this.memoStore = new MemoStore();
  }
 
}
