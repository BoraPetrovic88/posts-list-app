interface WithGreetMessageProps {
  message: string;
}

function withGreetMessage<T extends WithGreetMessageProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithTheme: React.FC<Omit<T, keyof WithGreetMessageProps>> = (
    props: Omit<T, keyof WithGreetMessageProps>
  ) => {
    const greetMessage = "Hello from";
    const fullMessage = `${greetMessage} - ${displayName}`;
    return <WrappedComponent {...(props as T)} message={fullMessage} />;
  };

  ComponentWithTheme.displayName = `withTheme(${displayName})`;

  return ComponentWithTheme;
}

export { withGreetMessage };
export type { WithGreetMessageProps };
