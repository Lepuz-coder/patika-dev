import React from "react";
import { TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import DoneIcon from "@material-ui/icons/Done";

type TodoType = {
  text: string;
  isEditting: boolean;
};

export default function Todo({ text, isEditting }: TodoType) {
  return (
    <li className="todo-list-container__todo-list__card__todos__todo">
      <button className="todo-list-container__todo-list__card__todos__todo__checkbox">
        <DoneIcon />
      </button>

      {isEditting ? (
        <TextField
          value={text}
          multiline={true}
          rowsMax={4}
          style={{ width: "80%" }}
        />
      ) : (
        <p className="todo-list-container__todo-list__card__todos__todo__text">
          {text}
        </p>
      )}

      {isEditting && (
        <div className="todo-list-container__todo-list__card__todos__todo__delete">
          <HighlightOffIcon />
        </div>
      )}
    </li>
  );
}
