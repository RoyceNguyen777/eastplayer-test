import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Country from "./views/pages/Country";
import Home from "./views/pages/Home";
import Todolist from "./views/pages/Todolist";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={(props) => <Home {...props} />}
          exact
        />
        <Route
          path="/todolist"
          render={(props) => <Todolist {...props} />}
        />
        <Route
          path="/country"
          render={(props) => <Country {...props} />}
        />
      </Switch >
    </BrowserRouter >
  );
}

