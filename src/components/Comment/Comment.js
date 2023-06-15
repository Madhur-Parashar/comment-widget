import Comments from "../Comments/Comments";

import CommentActions from "../CommentActions/CommentActions";
import { useState } from "react";

export default function Comment(props) {
  const [showEditComment, toggleEditComment] = useState(false);
  const { message, id, userName, createdAt, updatedAt } = props.comment;
  console.log(
    "message",
    message,
    createdAt,
    props.childComments,
    props.comments
  );
  const handleToggleEditComment = () => {
    toggleEditComment((showEditComment) => !showEditComment);
  };
  const commentTime = updatedAt ? updatedAt : createdAt;
  const formattedDate = commentTime
    ? `${commentTime.getDate()}/${
        commentTime.getMonth() + 1
      }/${commentTime.getFullYear()}`
    : null;
  //  const formattedTime = createdAt ? `${createdAt.getHours()}hr` : null
  return (
    <div className="comment ml-16 mt-8">
      <div className="comment__user-timestamp">
        {userName} | {formattedDate}{" "}
      </div>
      {!showEditComment ? <div>{message}</div> : null}
      <CommentActions
        onEditComment={handleToggleEditComment}
        message={message}
        showEditComment={showEditComment}
        onEditSuccess={handleToggleEditComment}
        id={id}
      />
      {props.childComments.length > 0 ? (
        <Comments commentList={props.childComments} />
      ) : null}
    </div>
  );
}
