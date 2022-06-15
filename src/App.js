// start ================= REDUX >>>>>>>>>>>>>>>>>
import { Provider } from "react-redux";
import TodoApp from "./REDUX/components/TodoApp";
import { todoStore } from "./REDUX/store-redux/TodoStore";

function App() {
  return (
    <div className="App">
      <Provider store={todoStore}>
        <TodoApp />
      </Provider>
    </div>
  );
}

export default App;

// end <<<<<<<<<<< REDUX ==============

// start ==================== useContext >>>
// import { useEffect, useState } from "react";
// import TodoApp from "./useContext/TodoApp";
// import { TodoListContext } from "./useContext/TodoListContext";

// function App() {
//   const [todoList, setTodoList] = useState([]);

//   useEffect(() => {
//     const storedTodoList = localStorage.getItem("TODO_LIST_QUAN");
//     if (storedTodoList === null) {
//       setTodoList([]);
//       return;
//     }
//     setTodoList(JSON.parse(storedTodoList));
//   }, []);

//   return (
//     <div className="App">
//       <TodoListContext.Provider
//         value={{
//           todoList: todoList,
//           updateTodoList: setTodoList,
//         }}
//       >
//         <TodoApp />
//       </TodoListContext.Provider>
//     </div>
//   );
// }

// export default App;
// end <<<<<<<<<<< useContext ==============
