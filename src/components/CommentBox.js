import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_comment } from "../actions/actions";
import requireAuth from "./requireAuth";

const CommentBox = (props) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const textchangeHandler = (e) => {
    setComment(e.target.value);
  };
  const { history } = props;
  const addCommentHandler = () => {
    dispatch(add_comment(comment));
    history.push("/");
  };

  return (
    <>
      <Card raised>
        <CardContent>
          <Typography>Add a Comment</Typography>
          <TextareaAutosize
            placeholder="Please type your comment"
            minRows={3}
            style={{ width: 500 }}
            onChange={textchangeHandler}
          />
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              onClick={addCommentHandler}
            >
              Add
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default requireAuth(CommentBox);
