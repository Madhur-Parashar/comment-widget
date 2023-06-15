import { CommentsContext } from "../../context/CommentsContext";
import { useContext } from "react";

import Comment from "../Comment/Comment";

export default function CommentList({ commentList }) {
  const comments = useContext(CommentsContext);
  console.log("comments", comments);
  const childComments = (id) =>
    comments.filter((comment) => comment.parent === id);
  return (
    <>
      {commentList.map((comment) => (
        <Comment
          key={comment.id}
          childComments={childComments(comment.id)}
          comment={comment}
        />
      ))}
    </>
  );
}
