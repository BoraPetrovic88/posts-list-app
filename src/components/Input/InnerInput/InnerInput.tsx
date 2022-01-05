import { forwardRef } from "react";
import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";

import "../style.scss";

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    WithGreetMessageProps {
  isLoading?: string;
  placeholder?: string;
}

const InnerInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  // eslint-disable-next-line no-console
  console.log(props.message);
  return (
    <div>
      <input
        {...props}
        ref={ref}
        data-testid="inner-input"
        className="inner-input"
        placeholder={props.placeholder}
      />
    </div>
  );
});

InnerInput.displayName = "Input";

export default withGreetMessage(InnerInput);
