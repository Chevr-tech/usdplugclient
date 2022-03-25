import React from "react";
import "./App.css";
import Home from "./screens/Home";
import { Switch, Route } from "react-router-dom";
import About from "./screens/About";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
}

export default App;
