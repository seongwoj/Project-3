import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Users from "./pages/Users";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Route exact path="/login" component={LogIn}/>
      <Route exact path="/signup" component={SignUp}/>
    </Router>
  );

}

export default App;
