import { observer } from "mobx-react";
import * as React from "react";
import { AppContext } from "../../AppContext";



interface Props {}
// observer로 함수를 감싸주어서 mobx를 사용할수 있게 만든다.
export const MemoInput = observer(function(props: Props) {
  
  
    const { memoStore } = React.useContext(AppContext);
    const inputElRef = React.useRef<HTMLInputElement>()


  return (
      <div style ={{
          display : 'flex',
          justifyContent : 'center',
          alignItems : 'center',
          flexFlow: 'column'
          
      }}>
          
        <input 
        style ={{
            display : 'block',
        }}
        type="text"
        placeholder = "add Memo"
        ref = {inputElRef}
        />

        <button
            onClick = {()=>{
                memoStore.addMemo( inputElRef.current.value)
                inputElRef.current.value = ''
            }}
        >
            submit
        </button>


        <div>
            <h3>memo</h3>
            <div>
                {memoStore.memos.map((el, i) =>{
                    return(
                        <p key = {i}>
                            {el}
                        </p>
                    )
                })}

            </div>
        </div>
      </div>
    
  );
});
