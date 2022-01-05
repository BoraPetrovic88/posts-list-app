import React, { ChangeEventHandler, useMemo, useState } from "react";
import { debounce } from "lodash";
import { NavLink } from "react-router-dom";
import "./style.scss";
import { UserModel } from "api/users/type";
import useUsers from "hook/useUsers";
import usePosts from "hook/usePosts";
import Shell from "components/Shell";
import useComments from "hook/useComments";
import InputWrapper from "components/Input/InputWrapper";
import InnerInput from "components/Input/InnerInput";
import CommentsList from "components/Comment";
import BoxWrapper from "components/BoxWrapper";
import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";
import PostsBody from "components/PostsBody";
import { PostModel } from "api/posts/types";
import { getUserById } from "util/getUserById";
import { filterUser } from "util/filterUser";
import { filterCommentsByPostId } from "util/filterCommentsByPostId";

type Props = WithGreetMessageProps;

const PostsListContainer: React.FC<Props> = ({ message }) => {
  // eslint-disable-next-line no-console
  console.log(message);
  const { posts, isLoading: isPostsLoading } = usePosts();
  const { users, isLoading: isUserloading } = useUsers();
  const { comments, isLoading: isCommentsLoading } = useComments();
  const [query, setQuery] = useState<string>("");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
  };

  const debouncedChangeHandler = useMemo(() => {
    return debounce(handleInputChange, 300);
  }, []);

  const filteredPosts: PostModel[] = useMemo(() => {
    if (query !== "") {
      const userFilter: UserModel[] = filterUser(users as UserModel[], query);
      return posts.filter(({ userId }) => userFilter.some(({ id }) => userId === id));
    } else {
      return posts;
    }
  }, [posts, query, users]);

  if (!users) {
    return null;
  }

  const renderPostsList = () => {
    return filteredPosts.map((post) => {
      const user = getUserById(users, post.userId);
      const postComments = filterCommentsByPostId(comments, post.id);
      return (
        <React.Fragment key={post.id}>
          <NavLink to={`/post/${post.id}`}>
            <PostsBody {...post} user={user}>
              <BoxWrapper>
                <CommentsList postComments={postComments} />
              </BoxWrapper>
            </PostsBody>
          </NavLink>
        </React.Fragment>
      );
    });
  };

  if (isPostsLoading || isUserloading || isCommentsLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="posts-list-container">
      <Shell>
        <InputWrapper inputid="filter-posts">
          <InnerInput
            id="filter-posts"
            placeholder="Filter posts..."
            onChange={debouncedChangeHandler}
          />
        </InputWrapper>
        {renderPostsList()}
      </Shell>
    </div>
  );
};

export default withGreetMessage(PostsListContainer);
