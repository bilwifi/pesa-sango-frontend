import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Connexion from "./views/Connexion"
import Signaler from "./views/Signaler"
import Home from "./components/Home";
import Recherche from "./views/Recerche"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signaler" component={Signaler} />
          <Route path="/connexion" component={Connexion} />
          <Route path="/recherche" component={Recherche} />
          <Route path="/listes-plaintes">
            {/** le composant de la page listes de plaintes */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
