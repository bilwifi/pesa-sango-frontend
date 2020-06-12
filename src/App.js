import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Inscription from "./views/Inscription";

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
          <Route path="/listes-plaintes">
            {/** le composant de la page listes de plaintes */}
          </Route>
          <Route path="/inscription">
            <Inscription/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
