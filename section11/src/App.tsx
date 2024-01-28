import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import { Todo } from "./types";
import TodoItem from "./components/TodoItem";
type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((item) => item.id !== action.id);
    }
  }
}

function App() {
  // useState는 초기값의 타입에 따라 타입을 자동 추론한다. -> 제네릭 함수
  // 초기값을 넣어주지 않으면 undefined 타입으로 초기화된다.
  // 초기값을 넣지 않을려면 <string> 으로 타입을 미리 정해줘야한다.
  // 하지만 초기값으로 타입을 추론하게 하는 것이 가장 좋다.
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
        ))}
      </div>
    </div>
  );
}

export default App;
