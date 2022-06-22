import React, { useEffect, useState } from "react";
import TodoApp from "./TodoApp";
import { TodoListContext } from "./TodoListContext";

function TodoAppUseContext() {
  const [todoList, setTodoList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const storedTodoList = localStorage.getItem("TODO_LIST_QUAN");
    if (storedTodoList === null) {
      setTodoList([]);
      return;
    }
    setTodoList(JSON.parse(storedTodoList));
  }, []);

  return (
    <div>
      <TodoListContext.Provider
        value={{
          todoList: todoList,
          updateTodoList: setTodoList,
          searchValue,
          setSearchValue,
        }}
      >
        <TodoApp />
      </TodoListContext.Provider>
    </div>
  );
}

export default TodoAppUseContext;
