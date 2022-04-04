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
import Dashboard from "./screens/Dashboard";
import DashboardHome from "./screens/Dashboard/Home";
import Settings from "./screens/Dashboard/Settings";
import Orders from "./screens/Dashboard/Order";
import Trade from "./screens/Dashboard/Trade";
import Profile from "./screens/Dashboard/Profile";

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
        <Route exact path="/dashboard" component={DashboardHome} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/trade" component={Trade} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </>
  );
}

export default App;
