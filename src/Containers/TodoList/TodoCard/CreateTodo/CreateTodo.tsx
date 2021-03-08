import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";

type CreateTodoType = {
  addTodoHandler: (value: string) => void;
};

export default function CreateTodo({ addTodoHandler }: CreateTodoType) {
  const [text, setText] = useState("");

  const addHandler = () => {
    addTodoHandler(text);
    setText("");
  };

  return (
    <li className="todo-list-container__todo-list__card__todos__todo">
      <TextField
        value={text}
        fullWidth
        onChange={(e) => setText(e.currentTarget.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addHandler();
          }
        }}
        placeholder="Yeni yapılacak ekle"
        style={{
          width: "90%",
        }}
      />
      <div
        className="todo-list-container__todo-list__card__todos__todo__add"
        onClick={addHandler}
      >
        <AddCircleOutlineOutlinedIcon />
      </div>
    </li>
  );
}
