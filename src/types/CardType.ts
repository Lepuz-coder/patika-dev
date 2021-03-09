import { TodoType } from "./TodoType";

export type CardType = {
  id: number;
  title: string;
  category: string;
  todos: TodoType[];
};
