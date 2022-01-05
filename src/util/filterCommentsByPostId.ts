import { CommentModel } from "api/comments/types";

export const filterCommentsByPostId = (
  comments: CommentModel[],
  postId: number
): CommentModel[] => {
  let postComments: CommentModel[] = [{ postId: -1, id: -1, name: "", email: "", body: "" }];
  if (comments) {
    postComments = comments.filter((comment) => comment.postId === postId) as CommentModel[];
  }
  return postComments;
};
