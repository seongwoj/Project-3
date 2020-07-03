import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
// import Users from "./pages/Users";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import DogParksMap from "./components/DogParksMap"


//Check for token to keep user logged in
if (localStorage.jwtToken) {
  //Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  //Decode token and get user info and exp
  const decoded = jwt_decode(token);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 4000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    //Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
  return (
    <Provider store={store}>
    <Router>
    <Route exact path="/fidosearch" component={DogParksMap}/>
      <Route exact path={['/','/login']} component={LogIn}/>
      <Route exact path="/signup" component={SignUp}/>
      
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
    </Provider>
  );
  }
}

export default App;
