import React, { useContext, useEffect, useState } from "react";
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
import CreateTodo from "./CreateTodo/CreateTodo";
type TodoCardType = {
  title: string;
  index: number;
  cardTodos: string[];
};

export default function TodoCard({ title, index, cardTodos }: TodoCardType) {
  const { todoState, setCards } = useContext(AppContext);
  const [isEditting, setIsEditting] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

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

  const onSaveHandler = () => {
    const copyCards = [...todoState.cards];

    copyCards[index].title = newTitle;
    copyCards[index].todos = todos;

    setCards(copyCards);
    setIsEditting(false);
  };

  const addTodoHandler = (todo: string) => {
    if (todo.trim().length > 0) {
      setTodos((oldTodos) => [...oldTodos, todo]);
    }
  };

  const updateTodoHandler = (newText: string, index: number) => {
    const copyTodos = [...todos];

    copyTodos[index] = newText;
    setTodos(copyTodos);
  };

  const deleteTodoHandler = (index: number) => {
    const copyTodos = [...todos];
    copyTodos.splice(index, 1);
    setTodos(copyTodos);
  };

  useEffect(() => {
    setNewTitle(title);
    setTodos(cardTodos);
  }, []);

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
          value={newTitle}
          multiline={true}
          rowsMax={4}
          style={{ width: "80%" }}
          onChange={(e) => setNewTitle(e.currentTarget.value)}
        />
      ) : (
        <h2 className="todo-list-container__todo-list__card__title">{title}</h2>
      )}

      <ul className="todo-list-container__todo-list__card__todos">
        <CreateTodo addTodoHandler={addTodoHandler} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            isEditting={isEditting}
            text={todo}
            updateTodoHandler={updateTodoHandler}
            deleteHandler={deleteTodoHandler}
            index={index}
          />
        ))}
      </ul>

      {isEditting && (
        <div className="todo-list-container__todo-list__card__save-button-box">
          <Button clickHandler={onSaveHandler} text="KAYDET" />
        </div>
      )}
    </div>
  );
}
