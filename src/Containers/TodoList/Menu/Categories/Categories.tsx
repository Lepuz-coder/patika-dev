import React, { useContext } from "react";
import { AppContext } from "../../../../context/AppStore";
import "./Categories.scss";

export default function Categories() {
  const { todoState } = useContext(AppContext);

  return (
    <ul className="todo-list-container__menu__categories">
      <h2 className="todo-list-container__menu__categories__header">
        Kategoriler
      </h2>

      {todoState.categories.map((category) => (
        <li className="todo-list-container__menu__categories__category">
          <button className="todo-list-container__menu__categories__category__button"></button>

          <p className="todo-list-container__menu__categories__category__text">
            {category}
          </p>
        </li>
      ))}
    </ul>
  );
}
