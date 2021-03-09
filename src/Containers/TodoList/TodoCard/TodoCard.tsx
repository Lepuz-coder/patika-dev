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
import { TodoType } from "../../../types/TodoType";
type TodoCardType = {
  id: number;
  title: string;
  index: number;
  cardTodos: TodoType[];
};

export default function TodoCard({
  title,
  index,
  cardTodos,
  id,
}: TodoCardType) {
  const {
    todoState,
    setCards,
    setCategories,
    setSelectedCategories,
  } = useContext(AppContext);
  const [isEditting, setIsEditting] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

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

      const cardIndex = copyCards.findIndex((card) => card.id === id);

      const cardCategory = copyCards[cardIndex].category;

      copyCards.splice(cardIndex, 1);

      const categoryCardIndex = copyCards.findIndex(
        (card) => card.category === cardCategory
      );

      //Eğer ki kategoriye sahip kart kalmadıysa siliyoruz
      if (categoryCardIndex === -1) {
        const copySelectedCategories = [...todoState.selectedCategories];
        const selectedCategoryIndex = copySelectedCategories.findIndex(
          (selCat) => selCat === cardCategory
        );
        if (selectedCategoryIndex !== -1) {
          copySelectedCategories.splice(selectedCategoryIndex, 1);
        }

        const copyCategories = [...todoState.categories];

        const categoryIndex = copyCategories.findIndex(
          (cat) => cat === cardCategory
        );

        copyCategories.splice(categoryIndex, 1);

        setCategories(copyCategories);
        setSelectedCategories(copySelectedCategories);
      }

      setCards(copyCards);
    }
  };

  const onSaveHandler = () => {
    const copyCards = [...todoState.cards];

    const cardIndex = copyCards.findIndex((card) => card.id === id);

    copyCards[cardIndex].title = newTitle;
    copyCards[cardIndex].todos = todos;

    setCards(copyCards);
    setIsEditting(false);
  };

  const addTodoHandler = (todo: string) => {
    if (todo.trim().length > 0) {
      setTodos((oldTodos) => [
        ...oldTodos,
        {
          name: todo,
          isTodo: false,
        },
      ]);
    }
  };

  const updateTodoHandler = (newText: string, index: number) => {
    const copyTodos = [...todos];

    copyTodos[index].name = newText;
    setTodos(copyTodos);
  };

  const updateTodoBoolHandler = (isTodo: boolean, index: number) => {
    const copyTodos = [...todos];

    copyTodos[index].isTodo = isTodo;
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
      onMouseOver={() => setIsHovering(true)}
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
        {isEditting && <CreateTodo addTodoHandler={addTodoHandler} />}
        {todos.map((todo, index) => (
          <Todo
            key={index}
            isEditting={isEditting}
            text={todo.name}
            updateTodoHandler={updateTodoHandler}
            updateTodoBoolHandler={updateTodoBoolHandler}
            deleteHandler={deleteTodoHandler}
            index={index}
            isTodo={todo.isTodo}
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
