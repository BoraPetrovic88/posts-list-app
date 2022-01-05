import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";

import "./style.scss";

type Props = WithGreetMessageProps;

const BoxWrapper: React.FC<Props> = ({ message, children }) => {
  // eslint-disable-next-line no-console
  console.log(message);
  return <div className="post-wrapper">{children}</div>;
};

export default withGreetMessage(BoxWrapper);
