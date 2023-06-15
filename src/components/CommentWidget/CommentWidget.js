import AddComment from "../AddComment/AddComment";
import CommentList from "../CommentList/CommentList";
import { CommentsProvider } from "../../context/CommentsContext";

export default function CommentWidget() {
  return (
    <div className="comment-widget">
      <h1>Comment Widget</h1>
      <section>
        <CommentsProvider>
          <AddComment />
          <CommentList />
        </CommentsProvider>
      </section>
    </div>
  );
}
