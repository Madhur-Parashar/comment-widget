import Comment from "../Comment/Comment";

export default function Comments({ commentList, comments }) {
  console.log("comments", comments, commentList);
  const childComments = (id) =>
    comments.filter((comment) => comment.parent === id);
  return (
    <>
      {commentList.map((comment) => (
        <div className="comments" key={comment.id}>
          <Comment
            childComments={childComments(comment.id)}
            comment={comment}
          />
          {childComments.length > 0 ? (
            <div className="child-comments ml-28">
              <Comments
                comments={comments}
                commentList={childComments(comment.id)}
              />
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}
