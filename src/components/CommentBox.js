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
import { ADD_COMMENT } from "../actions/types";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const textchangeHandler = (e) => {
    setComment(e.target.value);
  };
  const addCommentHandler = () => {
    dispatch({ type: ADD_COMMENT, value: comment });
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

export default CommentBox;
