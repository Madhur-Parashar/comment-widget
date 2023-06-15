import { createContext, useReducer } from "react";
import { initialComments } from "../constant/initialComments";
export const CommentsContext = createContext(null);
export const CommentsDispatchContext = createContext(null);

export function CommentsProvider({ children }) {
  const [comments, dispatch] = useReducer(commentsReducer, initialComments);

  return (
    <CommentsContext.Provider value={comments}>
      <CommentsDispatchContext.Provider value={dispatch}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsContext.Provider>
  );
}

function commentsReducer(comments, action) {
  const commentLength = comments.length;
  switch (action.type) {
    case "ADD_COMMENT": {
      console.log("ADD_COMMENT");
      return [
        ...comments,
        {
          message: action.message,
          timeStamp: action.timeStamp,
          id: commentLength + 1,
          parent: action.parent,
          userName: action.userName,
          createdAt: new Date(),
          updatedAt: null
        }
      ];
    }
    case "EDIT_COMMENT": {
      return comments.map((comment) => {
        if (comment.id === action.id) {
          return { ...comment, message: action.message, updatedAt: new Date() };
        } else {
          return comment;
        }
      });
    }
    case "DELETE_COMMENT": {
      return comments.filter((comment) => comment.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
