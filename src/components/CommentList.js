import { Card, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";

const CommentList = () => {
  const comments = useSelector((state) => state.commentBox);
  return (
    <Container>
      {comments.comments.map((comment, index) => {
        return (
          <Card key={index}>
            <CardContent>{comment}</CardContent>
          </Card>
        );
      })}
    </Container>
  );
};

export default CommentList;
