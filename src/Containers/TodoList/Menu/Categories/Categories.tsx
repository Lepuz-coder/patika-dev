import React from "react";
import "./Categories.scss";

export default function Categories() {
  return (
    <ul className="todo-list-container__menu__categories">
      <h2 className="todo-list-container__menu__categories__header">
        Kategoriler
      </h2>

      <li className="todo-list-container__menu__categories__category">
        <button className="todo-list-container__menu__categories__category__button"></button>

        <p className="todo-list-container__menu__categories__category__text">
          Günüm
        </p>
      </li>

      <li className="todo-list-container__menu__categories__category">
        <button className="todo-list-container__menu__categories__category__button"></button>

        <p className="todo-list-container__menu__categories__category__text">
          Patika Dev
        </p>
      </li>
    </ul>
  );
}
