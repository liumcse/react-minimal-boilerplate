import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "@routes";

// Import routes
import PageHome from "@routes/PageHome";

// Import global style
import "src/styles/app.scss";
import "src/styles/normalize.scss";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.ROUTE_HOME} component={PageHome} />
      {/* Add more routes here */}
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
