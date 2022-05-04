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
import AOS from "aos";
import "aos/dist/aos.css";
import Rate from "./screens/Rate";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import { useEffect } from "react";
import { setToken } from "./utlis/token";
import { OrderProvider } from "./context/OrderContext";
import EmailVerfication from "./screens/AuthScreen/EmailVerification";

function App() {
  AOS.init();

  return (
    <>
      <OrderProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/whoweare" component={About} />
          <Route exact path="/newsroom" component={Newsroom} />
          <Route exact path="/newsroom/:id" component={NewsDetails} />
          <Route exact path="/signup" component={AuthScreen} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/rate" component={Rate} />
          <Route exact path="/emailverification" component={EmailVerfication} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <GuardedRoute />
        </Switch>
      </OrderProvider>
    </>
  );
}

export default App;
