import React from "react";
import CreateCard from "./CreateCard/CreateCard";
import Menu from "./Menu/Menu";
import TodoCard from "./TodoCard/TodoCard";
import "./TodoList.scss";

export default function TodoList() {
  return (
    <div className="todo-list-container">
      <Menu />

      <div className="todo-list-container__todo-list">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <CreateCard />
      </div>
    </div>
  );
}
