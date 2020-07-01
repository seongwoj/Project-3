import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// import Users from "./pages/Users";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route exact path={['/','/login']} component={LogIn}/>
      <Route exact path="/signup" component={SignUp}/>
    </Router>
    </Provider>
  );

}

export default App;
