import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Friends from "./components/Friends";
import friendsData from "./data";
import FriendsForm from "./components/FriendsForm";

function App(props) {
  const logOut = () => {
    localStorage.removeItem("token");
    // props.history.push("/");
  };
  return (
    <Router>
      <div className="App">
        <ul>
          <Link to="/login">LogIn</Link>
          <Link onClick={logOut} to="/login">
            LogOut
          </Link>

          <Link to="/friends">Friends</Link>
          <Link to="/friendsForm">Add Friends</Link>
        </ul>

        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <PrivateRoute path="/friendsForm" component={FriendsForm} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
