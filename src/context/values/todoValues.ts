import { TodoActions } from "../actions/todoActions";

export type todoInitalValuesType = {
  name: string | null;
  surname: string | null;
};

export const todoInitalValues: todoInitalValuesType = {
  name: null,
  surname: null,
};

export type todoValuesType = {
  todoState: todoInitalValuesType;
  setUserData: (value: { name: string; surname: string }) => void;
};

export default (
  state: todoInitalValuesType,
  dispatch: (value: { type: string; value: any }) => void
): todoValuesType => ({
  todoState: state,
  setUserData: (value: { name: string; surname: string }) =>
    dispatch({ type: TodoActions.SET_USER_DATA, value }),
});
