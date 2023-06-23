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
  const nameFirstCharacter = userName.charAt(0);
  return (
    <div className="comment display-flex mt-16">
      <div class="image-container">
        <div className="comment__name-character">{nameFirstCharacter}</div>
      </div>
      <div className="comment-content ml-8">
        <div className="comment__user-timestamp">
          {userName} | {formattedDate} {updatedAt ? "(edited)" : null}
        </div>
        {!showEditComment ? <div>{message}</div> : null}
        <CommentActions
          onEditComment={handleToggleEditComment}
          message={message}
          showEditComment={showEditComment}
          onEditSuccess={handleToggleEditComment}
          id={id}
        />
      </div>
    </div>
  );
}
