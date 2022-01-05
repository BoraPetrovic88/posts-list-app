import React from "react";
import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";
import { capitalizeFirstLetter } from "util/capitalizeFirstLetter";

interface Props extends WithGreetMessageProps {
  text: string;
  className?: "title" | "text";
}

const Text: React.FC<Props> = ({ text, className, message }) => {
  // eslint-disable-next-line no-console
  console.log(message);
  return <div className={className}>{capitalizeFirstLetter(text)}</div>;
};

export default withGreetMessage(Text);
