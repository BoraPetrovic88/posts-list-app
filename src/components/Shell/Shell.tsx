import React from "react";
import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";

import "./style.scss";

type Props = WithGreetMessageProps;

const Shell: React.FC<Props> = ({ children, message }) => {
  // eslint-disable-next-line no-console
  console.log(message);
  return (
    <div className="shell">
      <div className="background" />
      {children}
    </div>
  );
};

export default withGreetMessage(Shell);
