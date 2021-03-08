import React, { useContext, useState } from "react";
import Button from "../../../Components/Button/Button";
import "./TodoCard.scss";
import ShareIcon from "@material-ui/icons/Share";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Todo from "./Todo/Todo";
import DeleteIcon from "@material-ui/icons/Delete";
import { TextField } from "@material-ui/core";
import { isMobile } from "react-device-detect";
import swal from "sweetalert2";
import { AppContext } from "../../../context/AppStore";
type TodoCardType = {
  title: string;
  index: number;
};

export default function TodoCard({ title, index }: TodoCardType) {
  const { todoState, setCards } = useContext(AppContext);
  const [isEditting, setIsEditting] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const deleteHandler = async () => {
    const swalRes = await swal.fire({
      icon: "warning",
      title: "Emin misin ?",
      text: "Bu projenizi kalıcı olarak silmek istiyor musunuz ?",
      confirmButtonText: "Evet",
      showCancelButton: true,
      cancelButtonText: "İptal",
    });

    if (swalRes.isConfirmed) {
      const copyCards = [...todoState.cards];

      copyCards.splice(index, 1);

      setCards(copyCards);
    }
  };

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
        <div
          className="todo-list-container__todo-list__card__delete"
          onClick={deleteHandler}
        >
          <DeleteIcon />
        </div>
      )}

      {((isHovering && !isEditting) || (isMobile && !isEditting)) && (
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

            <div
              className="todo-list-container__todo-list__card__overlay__mini-buttons__button"
              onClick={deleteHandler}
            >
              <HighlightOffIcon />
            </div>
          </div>
        </div>
      )}

      {isEditting ? (
        <TextField
          value={title}
          multiline={true}
          rowsMax={4}
          style={{ width: "80%" }}
        />
      ) : (
        <h2 className="todo-list-container__todo-list__card__title">{title}</h2>
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
