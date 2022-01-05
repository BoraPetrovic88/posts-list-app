import { UserModel } from "api/users/type";
import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";
import "./style.scss";

interface Props extends WithGreetMessageProps {
  user: UserModel;
}

const User: React.FC<Props> = ({ user, message }) => {
  // eslint-disable-next-line no-console
  console.log(message);
  return <div className="username">{user.name}</div>;
};
export default withGreetMessage(User);
