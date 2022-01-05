import { useEffect, useState } from "react";
import { CommentModel } from "api/comments/types";
import { getCommentsByPostId } from "api/comments/getCommentsByPostIdApi";

export default function useGetCommentsByPostId(postId: number) {
  const [comments, setComments] = useState<CommentModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getCommentsByPostId(postId)
      .then((result: CommentModel[]) => {
        if (result) {
          setComments(result);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [postId]);

  return { comments, isLoading };
}
