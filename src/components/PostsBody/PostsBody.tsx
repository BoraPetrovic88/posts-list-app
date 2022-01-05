import React from "react";
import { UserModel } from "api/users/type";
import "./style.scss";
import User from "components/User";
import BoxWrapper from "components/BoxWrapper";
import Text from "components/Text";
import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";

interface Props extends WithGreetMessageProps {
  title: string;
  user: UserModel;
}

const PostsBody: React.FC<Props> = ({ children, title, user }) => {
  return (
    <BoxWrapper>
      <User user={user} />
      <Text text={title} className="title" />
      {children}
    </BoxWrapper>
  );
};

export default withGreetMessage(PostsBody);
