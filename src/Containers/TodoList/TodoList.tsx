import React, { useContext } from "react";
import { AppContext } from "../../context/AppStore";
import CreateCard from "./CreateCard/CreateCard";
import Menu from "./Menu/Menu";
import TodoCard from "./TodoCard/TodoCard";
import "./TodoList.scss";

export default function TodoList() {
  const { todoState } = useContext(AppContext);

  return (
    <div className="todo-list-container">
      <Menu />

      <div className="todo-list-container__todo-list">
        {todoState.cards.map((card, index) => (
          <TodoCard key={index} title={card.title} index={index} />
        ))}
        <CreateCard />
      </div>
    </div>
  );
}
