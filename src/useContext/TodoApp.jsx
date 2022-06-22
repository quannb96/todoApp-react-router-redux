import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import SideBar from "./sidebar/SideBar";
import TaskDetail from "./pages/TaskDetail";
import Task from "./pages/Task";
import Create from "./create/Create";
import { TodoListContext } from "./TodoListContext";

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
  const classes = useStyles();
  const { todoList, searchValue } = useContext(TodoListContext);

  let newList = todoList.filter((item) => item.status === "New");
  let doingList = todoList.filter((item) => item.status === "Doing");
  let doneList = todoList.filter((item) => item.status === "Done");
  let searchList = todoList.filter((card) => {
    return (
      card.payload.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      card.payload.creator.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Container className={classes.container}>
          <Header />
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <SideBar />
            </Grid>
            <Grid item xs={10} style={{ paddingLeft: "5px", padding: "5px" }}>
              <div>
                <Routes>
                  <Route path="/create" element={<Create />} />
                  <Route path="/task-detail/:id" element={<TaskDetail />} />
                  <Route path="/" element={<Task todoTask={todoList} />} />
                  <Route path="/new" element={<Task todoTask={newList} />} />
                  <Route
                    path="/doing"
                    element={<Task todoTask={doingList} />}
                  />
                  <Route path="/done" element={<Task todoTask={doneList} />} />
                  <Route
                    path="/search"
                    element={<Task todoTask={searchList} />}
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
