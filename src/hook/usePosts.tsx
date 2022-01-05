import { useEffect, useState } from "react";
import { PostModel } from "api/posts/types";
import { getPostsList } from "api/posts/getPostsListApi";

export default function usePosts() {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getPostsList()
      .then((value: PostModel[]) => {
        if (value) {
          setPosts(value);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { posts, isLoading };
}
