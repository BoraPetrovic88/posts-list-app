import { useEffect, useState } from "react";
import { CommentModel } from "api/comments/types";
import { getComments } from "api/comments/getComments";

export default function useComments() {
  const [comments, setComments] = useState<CommentModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getComments()
      .then((result: CommentModel[]) => {
        setComments(result);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { comments, isLoading };
}
