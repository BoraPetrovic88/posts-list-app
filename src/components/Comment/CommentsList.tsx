import React from "react";
import CommentBody from "./components/CommentBody";
import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";
import { CommentModel } from "api/comments/types";
import "./style.scss";

interface Props extends WithGreetMessageProps {
  postComments: CommentModel[];
}

const CommentsList: React.FC<Props> = ({ message, postComments }) => {
  // eslint-disable-next-line no-console
  console.log(message);
  const postCommentsLength = postComments.length;

  const renderComments = () => {
    return postComments.slice(0, 2).map((comment) => {
      return (
        <React.Fragment key={comment.id}>
          <CommentBody {...comment} />
        </React.Fragment>
      );
    });
  };

  return (
    <div className="comments-continer">
      <p className="headline">Comments:</p>
      {renderComments()}
      {postCommentsLength > 2 && <p className="and-more">{`and ${postCommentsLength - 2} more`}</p>}
    </div>
  );
};

export default withGreetMessage(CommentsList);
