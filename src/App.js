import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

import Listes from "./views/Listes";
import Card from "./components/Card";
import Inscription from "./views/Inscription";

import Affichage from "./views/Affichage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/formulaire">
            <Listes />
          </Route>
          <Route path="/recherche">
            <Listes />
          </Route>
          <Route exact path="/listes-plaintes">
            <Listes />
          </Route>
          <Route path="/listes-plaintes/:id" component={Card} />

          <Route path="/inscription">
            <Inscription />
          </Route>
          <Route path="/affichage">
            <Affichage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
