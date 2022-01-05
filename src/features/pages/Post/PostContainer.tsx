import React from "react";
import { Link } from "react-router-dom";
import useGetPostById from "hook/useGetPostById";
import "./style.scss";
import Shell from "components/Shell";
import BoxWrapper from "components/BoxWrapper";
import useGetUserById from "hook/useGetUserById";
import Text from "components/Text";
import CommentBody from "components/Comment/components/CommentBody";
import useGetCommentsByPostId from "hook/useGetCommentsByPostId";
import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";
import PostsBody from "components/PostsBody";
import usePostQueryParams from "hook/usePostQueryParams";

type Props = WithGreetMessageProps;

const PostContainer: React.FC<Props> = ({ message }) => {
  // eslint-disable-next-line no-console
  console.log(message);
  const { postId } = usePostQueryParams();

  const { post, isLoading: isPostLoading } = useGetPostById(postId);
  const { user, isLoading: isUserLoading } = useGetUserById(post?.userId as number);
  const { comments, isLoading: isCommentsLoading } = useGetCommentsByPostId(postId);

  if (isPostLoading || isUserLoading || isCommentsLoading) {
    return <div>Loading...</div>;
  }

  if (!post || !user) {
    return null;
  }

  return (
    <div className="one-post-container">
      <Shell>
        <Link to="/posts" className="back-link">
          All Posts
        </Link>
        <PostsBody {...post} user={user}>
          <Text text={post.body} className="text" />
          <BoxWrapper>
            {comments?.map((comment) => {
              return (
                <React.Fragment key={comment.id}>
                  <CommentBody {...comment}>
                    <Text text={comment.body} className="text" />
                  </CommentBody>
                </React.Fragment>
              );
            })}
          </BoxWrapper>
        </PostsBody>
      </Shell>
    </div>
  );
};

export default withGreetMessage(PostContainer);
