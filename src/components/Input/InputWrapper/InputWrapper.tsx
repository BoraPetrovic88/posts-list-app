import React from "react";
import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";

import "../style.scss";

interface Props extends WithGreetMessageProps {
  inputid: string;
  text?: string;
}

const InputWrapper: React.FC<Props> = ({ text, inputid, children, message }) => {
  // eslint-disable-next-line no-console
  console.log(message);
  return (
    <div className="input">
      {text && (
        <div className="input__top">
          <label htmlFor={inputid} className="input__label">
            {text}
          </label>
        </div>
      )}
      <div className="input__container">{children}</div>
    </div>
  );
};

export default withGreetMessage(InputWrapper);
