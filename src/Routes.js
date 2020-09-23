import { Route, Switch } from "react-router-dom";
import React from "react";
import About from "./components/about/About";
import LearningPath from "./components/learning-path/LearningPath";
import Home from "./components/home/Home";
import Interviews from "./components/interview/Interviews";
import MentorBuddy from "./components/mentor-buddy/MentorBuddy";

const RouteList = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/learn" component={LearningPath} />
    <Route path="/interviews" component={Interviews} />
    <Route path="/about" component={About} />
    <Route path="/mentor-buddy" component={MentorBuddy} />
    <Route path="*" component={LearningPath} />
  </Switch>
);

export default RouteList;
