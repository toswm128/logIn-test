import React from "react";
import Home from "../containers/HomeContainer"
import LogIn from "../pages/LoginPage"
import SignUp from "../containers/SignUpContainer"
import Error from "../containers/ErrorContainer"
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
      <Route path="/LogIn">
        <LogIn />
      </Route>
      <Route path="/SignUp">
        <SignUp />
      </Route>
      <Route component={Error}>
        <Error />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
