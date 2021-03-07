import React from "react";
import ProfileIcon from "../../../Components/ProfileIcon/ProfileIcon";
import Categories from "./Categories/Categories";
import "./Menu.scss";

export default function Menu() {
  return (
    <div className="todo-list-container__menu">
      <div className="todo-list-container__menu__profile">
        <div className="todo-list-container__menu__profile__icon">
          <ProfileIcon />
        </div>

        <div className="todo-list-container__menu__profile__full-name">
          Emirhan Durusoy
        </div>
      </div>

      <Categories />
    </div>
  );
}
