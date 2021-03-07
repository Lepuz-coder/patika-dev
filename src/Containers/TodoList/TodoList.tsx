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
      </div>

      <div className="todo-list-container__todo-list"></div>
    </div>
  );
}
