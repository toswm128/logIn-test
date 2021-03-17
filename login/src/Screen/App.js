import React from "react";
import Home from "../pages/Home"
import LogIn from "../pages/LogIn"
import Error from "../pages/Error"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/Login">
        <LogIn />
      </Route>
      <Route component={Error}>
        <Error />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
