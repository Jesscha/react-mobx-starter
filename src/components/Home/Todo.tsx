import { observer } from "mobx-react";
import * as React from "react";
import { AppContext } from "../../AppContext";



interface Props {}
// observer로 함수를 감싸주어서 mobx를 사용할수 있게 만든다.
export const Todos = observer(function(props: Props) {
  
  
    const { todoStore } = React.useContext(AppContext);
   


  return (
      <div 
        style={{
            display : 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            
        }}
      >
          <div>
          <button 
            onClick = {()=>{
                todoStore.fetchTodo();
            }}
          >
              Fetch Todo-List
          </button>
            <div>
                <h2>TODO</h2>
                {todoStore.todos.map(el => <p>{el.title}</p>)}
            </div>

          </div>
          
      </div>
    
  );
});
