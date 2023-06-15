import { useState, useContext } from "react";
import Button from "../../ui-component/Button";
import Input from "../../ui-component/Input";
import AddComment from "../AddComment/AddComment";
import { CommentsDispatchContext } from "../../context/CommentsContext";

export default function CommentActions({
  id = null,
  message = "",
  onEditComment = () => {},
  onEditSuccess = () => {},
  showEditComment = false
}) {
  const [showAddComment, toggleAddComment] = useState(false);
  const [editCommentMessage, setEditCommentMessage] = useState(message);
  const dispatch = useContext(CommentsDispatchContext);
  const handleReplyComment = () => {
    toggleAddComment((showAddComment) => !showAddComment);
  };
  const handleDeleteComment = () => {
    dispatch({ type: "DELETE_COMMENT", id });
  };
  const handleSuccessfullyAddComment = () => {
    toggleAddComment((showAddComment) => !showAddComment);
  };
  const handleEditClick = () => {
    onEditComment();
  };
  const handleEditComment = () => {
    dispatch({ type: "EDIT_COMMENT", id, message: editCommentMessage });
    onEditSuccess();
  };
  const handleCommentChange = (e) => {
    setEditCommentMessage(e.target.value);
  };
  return (
    <div className="comment-actions">
      {showEditComment ? (
        <div className="display-flex">
          <Input
            type="text"
            id="root-comment-input"
            name="root-comment-input"
            placeholder="Please type message..."
            value={editCommentMessage}
            onChange={handleCommentChange}
          />
          <Button
            disabled={!editCommentMessage}
            className="ml-4"
            onClick={handleEditComment}
          >
            Edit
          </Button>
        </div>
      ) : null}
      <div className="comment-actions__cta display-flex">
        <Button isLink onClick={handleEditClick}>
          Edit
        </Button>
        <Button className="ml-4" isLink onClick={handleReplyComment}>
          Reply
        </Button>
        <Button isLink className="ml-4" onClick={handleDeleteComment}>
          Delete
        </Button>
      </div>
      {showAddComment ? (
        <AddComment
          className="mt-8"
          commentId={id}
          onAddCommentSuccess={handleSuccessfullyAddComment}
        />
      ) : null}
    </div>
  );
}
