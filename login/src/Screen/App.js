import React from "react";
import Home from "../pages/HomePage.jsx"
import LogIn from "../pages/LoginPage"
import SignUp from "../pages/SignUpPage.jsx"
import Logout from "../containers/LogoutContainer"
import Posting from "../pages/PostingPage"
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
      <Route path="/posting">
        <Posting />
      </Route>
      <Route path="/logout" component={Logout} />
      <Route component={Error}>
        <Error />
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
