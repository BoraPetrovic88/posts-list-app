import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";

const AppProviders: React.FC = ({ children }) => {
  return (
    <ErrorBoundary fallbackRender={(): React.ReactElement => <div>There was an error!</div>}>
      <Router>{children}</Router>
    </ErrorBoundary>
  );
};

export default AppProviders;
