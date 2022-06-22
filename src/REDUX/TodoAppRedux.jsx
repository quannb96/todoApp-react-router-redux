import React from "react";
import { Provider } from "react-redux";
import TodoApp from "./components/TodoApp";
import { todoStore } from "./store-redux/TodoStore";

function TodoAppRedux() {
  return (
    <div>
      <Provider store={todoStore}>
        <TodoApp />
      </Provider>
    </div>
  );
}

export default TodoAppRedux;
