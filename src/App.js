import React from "react";
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

import Listes from "./views/Listes";
import Card from "./components/Card";
import Inscription from "./views/Inscription";
import Connexion from "./views/Connexion";

import Affichage from "./views/Affichage";
import Recherche from "./views/Recherche";
import Signaler from "./views/Signaler";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Connexion />
          </Route>
          <Route exact path="/signup">
            <Inscription />
          </Route>
          <Route path="/plaintes">
            <Signaler />
          </Route>
          <Route path="/recherche">
            <Recherche />
          </Route>
          <Route exact path="/listes-plaintes">
            <Listes />
          </Route>
          <Route path="/listes-plaintes/:id" component={Card} />
          <Route path="/affichage">
            <Affichage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
