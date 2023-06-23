import { createContext, useReducer, useEffect } from "react";
import { initialComments } from "../constant/initialComments";
export const CommentsContext = createContext(null);
export const CommentsDispatchContext = createContext(null);

const LOCAL_STORAGE_COMMENT_KEY = "comments";
function getInitialComments(key, initialComments) {
  try {
    let localStorageValue = JSON.parse(localStorage.getItem(key));
    if (localStorageValue) {
      return localStorageValue;
    }
    localStorage.setItem(key, JSON.stringify(initialComments));
    return initialComments;
  } catch (err) {
    console.log("Error!", err);
    return initialComments;
  }
}
export function CommentsProvider({ children }) {
  const [comments, dispatch] = useReducer(
    commentsReducer,
    initialComments,
    () => getInitialComments(LOCAL_STORAGE_COMMENT_KEY, initialComments)
  );
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_COMMENT_KEY, JSON.stringify(comments));
  }, [comments]);
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
      return [
        ...comments,
        {
          message: action.message,
          timeStamp: action.timeStamp,
          id: commentLength + 1,
          parent: action.parent,
          userName: action.userName,
          createdAt: action.date,
          updatedAt: null,
        },
      ];
    }
    case "EDIT_COMMENT": {
      return comments.map((comment) => {
        if (comment.id === action.id) {
          return {
            ...comment,
            message: action.message,
            updatedAt: action.date,
          };
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
