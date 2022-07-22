import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import * as React from "react";
import Container from "@mui/material/Container";
import { Button, ButtonGroup, Stack } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Stack
        justifyContent="flex-start"
        alignItems="flex-end"
        spacing={2}
      >
        <ButtonGroup>
        <Link to="/">
            <Button color="secondary">Home</Button>
          </Link>
          <Link to="/post">
            <Button color="secondary">Add a comment</Button>
          </Link>
          <Button color="primary" size="large">
            Sign In
          </Button>
        </ButtonGroup>
      </Stack>

      <Routes>
        <Route path="/post" element={<CommentBox />}></Route>
        <Route path="/" exact element={<CommentList />}></Route>
      </Routes>
    </Container>
  );
};

export default App;
