import React, { useContext } from "react";
import { AppContext } from "../../../../../context/AppStore";

type CategoryType = {
  category: string;
};

export default function Category({ category }: CategoryType) {
  const { todoState, setSelectedCategories } = useContext(AppContext);

  const isSelected = todoState.selectedCategories.includes(category);

  const selectCategoryHandler = (category: string, isSelected: boolean) => {
    const copySelectedCategories = [...todoState.selectedCategories];

    const selectedCategoryIndex = copySelectedCategories.findIndex(
      (el) => el === category
    );

    if (isSelected) {
      copySelectedCategories.splice(selectedCategoryIndex, 1);
    } else {
      copySelectedCategories.push(category);
    }

    setSelectedCategories(copySelectedCategories);
  };

  return (
    <li
      className={`todo-list-container__menu__categories__category ${
        isSelected
          ? "todo-list-container__menu__categories__category--selected"
          : null
      }`}
      onClick={() => selectCategoryHandler(category, isSelected)}
    >
      <button className="todo-list-container__menu__categories__category__button"></button>

      <p className="todo-list-container__menu__categories__category__text">
        {category}
      </p>
    </li>
  );
}
