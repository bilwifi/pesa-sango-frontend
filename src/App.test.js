import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Connexion from "./views/Connexion"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";

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
          <Route path="/connexion" component={Connexion} />
          <Route path="/listes-plaintes">
            {/** le composant de la page listes de plaintes */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
