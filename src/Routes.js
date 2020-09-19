import { Route, Switch } from "react-router-dom";
import React from "react";
import About from "./components/About";
import LearningPath from "./components/LearningPath";
import Home from "./components/Home";

const RouteList = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/learn" component={LearningPath} />
    <Route path="/about" component={About} />
    <Route path="*" component={LearningPath} />
  </Switch>
);

export default RouteList;
