import { useContext } from "react";

import { CommentsContext } from "../../context/CommentsContext";
import Comments from "../Comments/Comments";

export default function CommentList() {
  const comments = useContext(CommentsContext);
  console.log("comments", comments);
  const rootComments = comments.filter((comment) => comment.parent === null);

  return (
    <div className="comment-list mt-8">
      <Comments commentList={rootComments} comments={comments} />
    </div>
  );
}
