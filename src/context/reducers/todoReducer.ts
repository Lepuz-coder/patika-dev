import { todoInitalValuesType } from "../values/todoValues";
import { TodoActions } from "../actions/todoActions";

export default (
  state: todoInitalValuesType,
  action: { type: string; value: any }
): todoInitalValuesType => {
  switch (action.type) {
    case TodoActions.SET_USER_DATA:
      return {
        ...state,
        name: action.value.name,
        surname: action.value.surname,
      };
    case TodoActions.SET_CARDS:
      return {
        ...state,
        cards: action.value,
      };
    case TodoActions.SET_CATEGORIES:
      return {
        ...state,
        categories: action.value,
      };
    case TodoActions.SET_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: action.value,
      };

    default:
      return state;
  }
};
