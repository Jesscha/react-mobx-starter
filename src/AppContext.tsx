import * as React from "react";
import { RootStore } from "./stores";


const rootStore = new RootStore();

export function createStores() {
  // 각 store를 분리한다.
  return { applicationStore: rootStore.applicationStore,
            memoStore : rootStore.memoStore,
            todoStore : rootStore.todoStore
  };
}



export const stores = createStores();

export const AppContext = React.createContext(stores);
