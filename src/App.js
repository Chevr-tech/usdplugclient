import React from "react";
import "./App.css";
import Home from "./screens/Home";
import { Switch, Route } from "react-router-dom";
import About from "./screens/About";
import Newsroom from "./screens/NewsRoom";
import NewsDetails from "./screens/NewsRoom/NewsDetails";
import AuthScreen from "./screens/AuthScreen";
import ForgotPassword from "./screens/AuthScreen/ForgotPassword";
import SignIn from "./screens/AuthScreen/SignIn";
import GuardedRoute from "./components/GuardedRoute";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/newsroom" component={Newsroom} />
        <Route exact path="/newsroom" component={Newsroom} />
        <Route exact path="/newsroom/:id" component={NewsDetails} />
        <Route exact path="/signup" component={AuthScreen} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <GuardedRoute />
      </Switch>
    </>
  );
}

export default App;
