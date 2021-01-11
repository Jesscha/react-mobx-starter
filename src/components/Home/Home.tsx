import { observer } from "mobx-react";
import * as React from "react";
import { AppContext } from "../../AppContext";
import { Button, Container, NumberDisplay } from "./styles";
import {MemoInput} from './MemoInput'
import { Todos } from "./Todo";

interface Props {}
// observer로 함수를 감싸주어서 mobx를 사용할수 있게 만든다.
export const Home = observer(function(props: Props) {
  // 바로 이해할 수 없는 부분이 등장했다. AppContext는 뭘 하는 거길레 갑자기 등장했을까? 
  // MobX를 리액트와 연결시키는 방식으로 ContextAPI를 섞어서 쓰고 있다. 
  // AppContext.tsx에서 applicationStore에 Application 객체를 담아 보낸다. 
  // 이제 이 컨텍스트는 이 프로젝트에서 쓸수 있는 컨텍스트가 된다. 
  const { applicationStore } = React.useContext(AppContext);
  



  return (
    <>
    <Container>
      <Button onClick={applicationStore.decrement}>-</Button>
      <NumberDisplay data-testid="counter-value">
        {applicationStore.counter}
      </NumberDisplay>
      <Button onClick={applicationStore.increment}>+</Button>

    
    </Container>
    <MemoInput
      />
    <Todos />
    </>
  );
});
