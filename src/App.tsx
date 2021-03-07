import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import Login from "./Containers/Login/Login";
import TodoList from "./Containers/TodoList/TodoList";
import "./App.scss";
import AppStore from "./context/AppStore";

function App() {
  return (
    <AppStore>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/giris" exact>
          <Login />
        </Route>

        <Route path="/yapilacaklar-listem">
          <TodoList />
        </Route>
      </Switch>
    </AppStore>
  );
}

export default App;
