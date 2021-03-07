import React from "react";
import Menu from "./Menu/Menu";
import "./TodoList.scss";

export default function TodoList() {
  return (
    <div className="todo-list-container">
      <Menu />

      <div className="todo-list-container__todo-list"></div>
    </div>
  );
}
