import React from "react";
import "../styles/styles.scss";
import Header from "./commons/Header";
import { BrowserRouter as Router } from "react-router-dom";
import RouteList from "../Routes";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {RouteList}
      </Router>
    </div>
  );
}
