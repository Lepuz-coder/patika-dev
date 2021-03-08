import { CardType } from "../../types/CardType";
import { TodoActions } from "../actions/todoActions";

export type todoInitalValuesType = {
  name: string | null;
  surname: string | null;
  cards: CardType[];
  categories: string[];
  selectedCategories: string[];
};

export const todoInitalValues: todoInitalValuesType = {
  name: null,
  surname: null,
  cards: [],
  categories: [],
  selectedCategories: [],
};

export type todoValuesType = {
  todoState: todoInitalValuesType;
  setUserData: (value: { name: string; surname: string }) => void;
  setCards: (value: CardType[]) => void;
  setCategories: (value: string[]) => void;
  setSelectedCategories: (value: string[]) => void;
};

export default (
  state: todoInitalValuesType,
  dispatch: (value: { type: string; value: any }) => void
): todoValuesType => ({
  todoState: state,
  setUserData: (value: { name: string; surname: string }) =>
    dispatch({ type: TodoActions.SET_USER_DATA, value }),
  setCards: (value: CardType[]) =>
    dispatch({ type: TodoActions.SET_CARDS, value }),
  setCategories: (value: string[]) =>
    dispatch({ type: TodoActions.SET_CATEGORIES, value }),
  setSelectedCategories: (value: string[]) =>
    dispatch({ type: TodoActions.SET_SELECTED_CATEGORIES, value }),
});
