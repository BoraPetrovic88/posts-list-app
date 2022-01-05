import { useEffect, useState } from "react";
import { PostModel } from "api/posts/types";
import { getPostById } from "api/posts/getPostByIdApi";

export default function useGetPostById(postId: number) {
  const [post, setPost] = useState<PostModel>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getPostById(postId)
      .then((result: PostModel) => {
        if (result) {
          setPost(result);
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

  return { post, isLoading };
}
