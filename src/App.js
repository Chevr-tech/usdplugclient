import React from "react";
import "./App.css";
import Home from "./screens/Home";
import { Switch, Route } from "react-router-dom";
import About from "./screens/About";
import Newsroom from "./screens/NewsRoom";
import NewsDetails from "./screens/NewsRoom/NewsDetails";
import AuthScreen from "./screens/AuthScreen";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/newsroom" component={Newsroom} />
        <Route exact path="/newsroom" component={Newsroom} />
        <Route exact path="/newsroom/:id" component={NewsDetails} />
        <Route exact path="/auth" component={AuthScreen} />
      </Switch>
    </>
  );
}

export default App;
