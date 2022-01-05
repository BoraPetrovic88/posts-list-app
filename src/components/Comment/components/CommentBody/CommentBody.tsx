import Text from "components/Text";
import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";
import { getUserNameFromEmail } from "util/getUserNameFromEmail";
import "./style.scss";

interface Props extends WithGreetMessageProps {
  name: string;
  email: string;
}

const CommentBody: React.FC<Props> = ({ children, name, email, message }) => {
  // eslint-disable-next-line no-console
  console.log(message);
  return (
    <div className="comment-wrapper">
      <div data-testid="user-name-email" className="user-name-email">
        {getUserNameFromEmail(email)}
      </div>
      <Text text={name} className="title" />
      {children}
      <hr />
    </div>
  );
};

export default withGreetMessage(CommentBody);
