import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../../context/AppStore";
import CreateCard from "./CreateCard/CreateCard";
import Menu from "./Menu/Menu";
import TodoCard from "./TodoCard/TodoCard";
import "./TodoList.scss";

export default function TodoList() {
  const { todoState } = useContext(AppContext);
  const history = useHistory();
  if (!localStorage.getItem("name") || !localStorage.getItem("surname")) {
    history.push("/");
  }

  return (
    <div className="todo-list-container">
      <Menu />

      <div className="todo-list-container__todo-list">
        {todoState.cards.map((card, index) => {
          if (
            todoState.selectedCategories.length > 0 &&
            !todoState.selectedCategories.includes(card.category)
          )
            return null;

          return (
            <TodoCard
              id={card.id}
              key={card.id}
              title={card.title}
              index={index}
              cardTodos={card.todos}
            />
          );
        })}
        <CreateCard />
      </div>
    </div>
  );
}
