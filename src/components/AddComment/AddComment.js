import Input from "../../ui-component/Input";
import Button from "../../ui-component/Button";

import { CommentsDispatchContext } from "../../context/CommentsContext";
import { useContext, useState } from "react";

export default function AddComment({
  commentId = null,
  onAddCommentSuccess = () => {},
  userName = "Maddy",
}) {
  const [message, setMessage] = useState("");
  const dispatch = useContext(CommentsDispatchContext);
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };
  const handleButtonClick = () => {
    console.log("Clicked");
    dispatch({
      type: "ADD_COMMENT",
      message: message,
      parent: commentId,
      userName: userName,
      date: new Date(),
    });
    setMessage("");
    onAddCommentSuccess();
  };
  return (
    <div className="add-comments mt-4 display-flex">
      <Input
        type="text"
        id="root-comment-input"
        name="root-comment-input"
        placeholder="Please type message..."
        value={message}
        onChange={handleInputChange}
      />
      <Button disabled={!message} className="ml-4" onClick={handleButtonClick}>
        Add comment
      </Button>
    </div>
  );
}
