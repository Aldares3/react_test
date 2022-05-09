import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import MacBookPro161 from "./components/MacBookPro161";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|macbook-pro-16-1)">
          <MacBookPro161
            group1="/img/group@1x.png"
            group2="/img/group-1@1x.png"
            hansoBank="/img/hanso--bank@2x.png"
            component1="/img/component-1@2x.png"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
