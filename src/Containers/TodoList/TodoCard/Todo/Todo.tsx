import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DoneIcon from "@material-ui/icons/Done";

type TodoType = {
  text: string;
  isEditting: boolean;
  updateTodoHandler: (value: string, index: number) => void;
  deleteHandler: (index: number) => void;
  index: number;
};

export default function Todo({
  text,
  isEditting,
  updateTodoHandler,
  deleteHandler,
  index,
}: TodoType) {
  const [isChecked, setİsChecked] = useState<boolean>(false);

  return (
    <li className="todo-list-container__todo-list__card__todos__todo">
      <button
        className={`todo-list-container__todo-list__card__todos__todo__checkbox ${
          isChecked
            ? "todo-list-container__todo-list__card__todos__todo__checkbox--checked"
            : null
        }`}
        onClick={() => setİsChecked((oldState) => !oldState)}
      >
        <DoneIcon />
      </button>

      {isEditting ? (
        <TextField
          value={text}
          multiline={true}
          rowsMax={4}
          style={{ width: "80%" }}
          onChange={(e) => updateTodoHandler(e.currentTarget.value, index)}
        />
      ) : (
        <p
          className={`todo-list-container__todo-list__card__todos__todo__text ${
            isChecked
              ? "todo-list-container__todo-list__card__todos__todo__text--checked"
              : null
          }`}
        >
          {text}
        </p>
      )}

      {isEditting && (
        <div
          className="todo-list-container__todo-list__card__todos__todo__delete"
          onClick={() => deleteHandler(index)}
        >
          <HighlightOffIcon />
        </div>
      )}
    </li>
  );
}
