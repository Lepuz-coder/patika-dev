import React, { useState } from "react";
import Button from "../../../Components/Button/Button";
import "./TodoCard.scss";
import ShareIcon from "@material-ui/icons/Share";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Todo from "./Todo/Todo";
import DeleteIcon from "@material-ui/icons/Delete";
import { TextField } from "@material-ui/core";

export default function TodoCard() {
  const [isEditting, setIsEditting] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <div
      className={`todo-list-container__todo-list__card ${
        isEditting ? "todo-list-container__todo-list__card--editting" : null
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      {isEditting && (
        <div className="todo-list-container__todo-list__card__delete">
          <DeleteIcon />
        </div>
      )}

      {isHovering && !isEditting && (
        <div className="todo-list-container__todo-list__card__overlay">
          <div className="todo-list-container__todo-list__card__overlay__button-box">
            <Button clickHandler={() => setIsEditting(true)} text="EDIT" />
          </div>

          <div className="todo-list-container__todo-list__card__overlay__mini-buttons">
            <div className="todo-list-container__todo-list__card__overlay__mini-buttons__button">
              <ShareIcon />
            </div>

            <div className="todo-list-container__todo-list__card__overlay__mini-buttons__button">
              <FileCopyIcon />
            </div>

            <div className="todo-list-container__todo-list__card__overlay__mini-buttons__button">
              <HighlightOffIcon />
            </div>
          </div>
        </div>
      )}

      {isEditting ? (
        <TextField
          value="Anasayfa için yapılacaklar"
          multiline={true}
          rowsMax={4}
          style={{ width: "80%" }}
        />
      ) : (
        <h2 className="todo-list-container__todo-list__card__title">
          Anasayfa için yapılacaklar
        </h2>
      )}

      <ul className="todo-list-container__todo-list__card__todos">
        <Todo
          isEditting={isEditting}
          text="Edit kısmı yapılacaktır. Sonra düzenlenecektir"
        />
        <Todo isEditting={isEditting} text="Edit kutusunu kontrol et" />
        <Todo isEditting={isEditting} text="Create kısmını yap" />
        <Todo isEditting={isEditting} text="Create'i kontrol et" />
        <Todo isEditting={isEditting} text="Delete'i yap" />
      </ul>

      {isEditting && (
        <div className="todo-list-container__todo-list__card__save-button-box">
          <Button clickHandler={() => setIsEditting(false)} text="KAYDET" />
        </div>
      )}
    </div>
  );
}
