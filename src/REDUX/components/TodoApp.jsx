import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import SearchList from "./search/SearchList";
import Create from "./create/Create";
import AllTask from "./pages/AllTask";
import TaskDetail from "./pages/TaskDetail";
import NewTask from "./pages/NewTask";
import DoingTask from "./pages/DoingTask";
import DoneTask from "./pages/DoneTask";

import { useSelector, useDispatch } from "react-redux";
import { updateTodoList } from "../slice-redux/TodoSlice";

const useStyles = makeStyles({
  app: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#E5E5E5",
    paddingTop: "30px",
  },
  container: {
    maxWidth: "1035px",
    backgroundColor: "#fff",
    height: "640px",
    boxShadow: "0 0 3px #ccc",
    padding: 0,
  },
});

function TodoApp() {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const localUpdateTodoList = (newTodoList) => {
    dispatch(updateTodoList([...newTodoList]));
  };
  const classes = useStyles();

  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const storedTodoList = localStorage.getItem("TODO_LIST_QUAN");
    if (storedTodoList === null) {
      localUpdateTodoList([]);
      return;
    }
    localUpdateTodoList(JSON.parse(storedTodoList));
  }, []);

  const handleSearchValue = (searchValue) => {
    if (searchValue === "") {
      alert("Invalid Search");
    }
    const filteredCard = todoList.filter((card) => {
      return (
        card.payload.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        card.payload.creator.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    setSearchList(filteredCard);
  };

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Container className={classes.container}>
          <Header onSearchValue={handleSearchValue} />
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <SideBar />
            </Grid>
            <Grid item xs={10} style={{ paddingLeft: "5px", padding: "5px" }}>
              <div>
                <Routes>
                  <Route
                    path="/search"
                    element={<SearchList searchList={searchList} />}
                  />
                  <Route path="/create" element={<Create />} />
                  <Route path="/" element={<AllTask todoList={todoList} />} />
                  <Route path="/task-detail/:id" element={<TaskDetail />} />
                  <Route
                    path="/new"
                    element={<NewTask todoList={todoList} />}
                  />
                  <Route
                    path="/doing"
                    element={<DoingTask todoList={todoList} />}
                  />
                  <Route
                    path="/done"
                    element={<DoneTask todoList={todoList} />}
                  />
                </Routes>
              </div>
            </Grid>
          </Grid>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default TodoApp;
