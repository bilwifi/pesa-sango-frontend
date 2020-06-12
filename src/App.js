import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

import Signalement from './views/Signalement'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/formulaire">
            {/** le composant de la page signaler un bleme */}
          </Route>
          <Route path="/recherche">
            {/** le composant de la page signaler un bleme */}
          </Route>
          <Route path="/listes-plaintes">
            {/** le composant de la page listes de plaintes */}
            <Signalement/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
