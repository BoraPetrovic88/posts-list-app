import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withGreetMessage, WithGreetMessageProps } from "hoc/withGreetMessage";
import PostsList from "features/pages/PostsList";
import "./App.scss";
import Post from "features/pages/Post";

type Props = WithGreetMessageProps;

const App: React.FC<Props> = ({ message }) => {
  // eslint-disable-next-line no-console
  console.log(message);
  const RedirectWithStatus = ({
    from,
    to,
    status,
  }: {
    from: string;
    to: string;
    status: number;
  }) => (
    <Route
      render={({ staticContext }) => {
        if (staticContext) staticContext.statusCode = status;
        return <Redirect from={from} to={to} />;
      }}
    />
  );

  return (
    <Suspense fallback={"Loading..."}>
      <Switch>
        <Route exact path="/posts">
          <PostsList />
        </Route>
        <Route exact path="/post/:id">
          <Post />
        </Route>
        <Route path="/404">Not Fount...</Route>
        <Route exact path="/" render={() => <Redirect to="/posts" />} />
        <RedirectWithStatus status={404} from="*" to="/404" />
      </Switch>
    </Suspense>
  );
};
export default withGreetMessage(App);
