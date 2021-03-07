import React from "react";
import ProfileIcon from "../../Components/ProfileIcon/ProfileIcon";
import "./TodoList.scss";

export default function TodoList() {
  return (
    <div className="todo-list-container">
      <div className="todo-list-container__settings">
        <div className="todo-list-container__settings__profile">
          <div className="todo-list-container__settings__profile__icon">
            <ProfileIcon />
          </div>

          <div className="todo-list-container__settings__profile__full-name">
            Emirhan Durusoy
          </div>
        </div>

        <ul className="todo-list-container__settings__categories">
          <h2 className="todo-list-container__settings__categories__header">
            Kategoriler
          </h2>

          <li className="todo-list-container__settings__categories__category">
            <button className="todo-list-container__settings__categories__category__button"></button>

            <p className="todo-list-container__settings__categories__category__text">
              Günüm
            </p>
          </li>

          <li className="todo-list-container__settings__categories__category">
            <button className="todo-list-container__settings__categories__category__button"></button>

            <p className="todo-list-container__settings__categories__category__text">
              Patika Dev
            </p>
          </li>
        </ul>
      </div>

      <div className="todo-list-container__todo-list"></div>
    </div>
  );
}
