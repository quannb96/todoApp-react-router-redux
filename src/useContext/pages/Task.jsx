import React, { useState } from "react";
import TodoCard from "../card/TodoCard";
import { Box, CssBaseline, Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useNavigate } from "react-router";
import usePagination from "../pagination/Pagination";

function Task({ todoTask }) {
  let [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const count = Math.ceil(todoTask.length / PER_PAGE);
  const _DATA = usePagination(todoTask, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const navigate = useNavigate();
  const gotoDetail = (item) => {
    navigate(`/task-detail/${item.id}`);
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <CssBaseline />
      <div style={{ width: "100%" }}>
        <Box
          display="flex"
          flexWrap="wrap"
          alignContent="flex-start"
          p={1}
          m={1}
          px={0}
          bgcolor="background.paper"
          sx={{ maxWidth: 860, height: 500, paddingTop: 15 }}
        >
          {_DATA.currentData().map((item) => (
            <Grid item xs={3} key={item.id} onClick={() => gotoDetail(item)}>
              <TodoCard {...item} />
            </Grid>
          ))}
        </Box>
      </div>
      <Box
        py={2}
        sx={{ paddingRight: 12 }}
        display="flex"
        justifyContent="center"
      >
        <Pagination
          style={{ display: todoTask.length <= 12 ? "none" : "block" }}
          color="primary"
          count={count}
          size="large"
          page={page}
          onChange={handleChange}
        />
      </Box>
    </div>
  );
}

export default Task;
