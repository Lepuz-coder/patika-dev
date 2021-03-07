import React, { createContext, Reducer, useReducer } from "react";
import AppStoreInterface from "./AppStoreInterface";
import todoReducer from "./reducers/todoReducer";
import todoInitalValuesFactory, { todoInitalValues } from "./values/todoValues";

export const AppContext = createContext<AppStoreInterface>(
  todoInitalValues as any
);

export default function AppStore({ children }: any) {
  const [todoState, todoDispatch] = useReducer<Reducer<any, any>>(
    todoReducer,
    todoInitalValues
  );

  const value = {
    ...todoInitalValuesFactory(todoState, todoDispatch),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
