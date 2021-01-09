import * as React from "react";
import { ApplicationStore } from "./stores";

export function createStores() {
  //ApplicationStore가 Mobx로 만들어진 우리가 관찰해야 할 대상인 스토어가 된다. 
  return { applicationStore: new ApplicationStore() };
}



export const stores = createStores();

export const AppContext = React.createContext(stores);
