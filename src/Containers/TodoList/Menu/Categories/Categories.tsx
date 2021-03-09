import React, { useContext } from "react";
import { AppContext } from "../../../../context/AppStore";
import "./Categories.scss";
import Category from "./Category/Category";

export default function Categories() {
  const { todoState, setSelectedCategories } = useContext(AppContext);

  return (
    <ul className="todo-list-container__menu__categories">
      <h2 className="todo-list-container__menu__categories__header">
        Kategoriler
      </h2>

      <p className="todo-list-container__menu__categories__sub-text">
        Kategori bulunmamaktadır
      </p>

      {todoState.categories.map((category, index) => (
        <Category category={category} key={index} />
      ))}
    </ul>
  );
}
