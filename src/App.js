import React from "react";
import NavMenu from "./components/NavMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/">
            {" "}
            <Home />
          </Route>
          <Route exact path="/about">
            {" "}
            <About />
          </Route>
          <Route exact path="/Project">
            {" "}
            <Project />
          </Route>
          <Route exact path="/contact">
            {" "}
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
