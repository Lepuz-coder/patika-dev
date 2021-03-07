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

    default:
      return state;
  }
};
