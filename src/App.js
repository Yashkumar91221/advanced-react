import "./App.css";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import * as React from "react";
import Container from "@mui/material/Container";
import { Button, ButtonGroup, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { sign_in, sign_out } from "./actions/actions";

const App = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();
  const signInHandler = () => {
    authenticated ? dispatch(sign_out()) : dispatch(sign_in());
  };
  return (
    <Container maxWidth="sm">
      <HashRouter>
        <Stack justifyContent="flex-start" alignItems="flex-end" spacing={2}>
          <ButtonGroup>
            <Link to="/">
              <Button color="secondary">Home</Button>
            </Link>
            <Link to="/post">
              <Button color="secondary">Post</Button>
            </Link>
            <Button color="primary" size="large" onClick={signInHandler}>
              {authenticated ? "Sign Out" : "Sign In"}
            </Button>
          </ButtonGroup>
        </Stack>
        <Switch>
          <Route path="/" component={CommentList} exact />
          <Route path="/post" component={CommentBox} />
        </Switch>
      </HashRouter>
    </Container>
  );
};

export default App;
