import { makeAutoObservable } from "mobx";

interface TodoItem{
    "userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"completed": false
}

export class TodoStore {
  
  todos  = [] as Array<TodoItem>
  idx = 1


  constructor() {
    makeAutoObservable(this);
  }


  async fetchTodo (){
    try{
        const res  = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.idx}`);
        const data = await res.json();
        this.todos.push(data);
        this.idx ++ 

    } catch{
        alert('서버와 소통에 실패했습니다.')
    }
      
  }
}
