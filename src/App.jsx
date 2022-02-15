import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import { colors } from "./assets";
import routes from "./views/container/_routes";

export default function App() {
  const routeComponents = routes.map(({ path, component, exact }, index) => <Route path={path} component={component} exact={exact} />)
  return (
    <div style={{
      padding: "20px",
      width: "500px",
      margin: "auto",
      border: `3px double ${colors.grey}`,
      backgroundColor: colors.bg_grey,
      marginTop: "40px",
      borderRadius: "25px"
    }} >
      <Switch>
        {routeComponents}
      </Switch >
    </div>
  );
}

