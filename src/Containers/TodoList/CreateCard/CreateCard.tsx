import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useContext, useState } from "react";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/Input/Input";
import { AppContext } from "../../../context/AppStore";
import "./CreateCard.scss";

export default function CreateCard() {
  const { todoState, setCards, setCategories } = useContext(AppContext);
  const [isCreating, setİsCreating] = useState<boolean>(false);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");

  const createHandler = () => {
    const copyCards = [...todoState.cards];
    const copyCategories = [...todoState.categories];

    if (!copyCategories.includes(category)) {
      copyCategories.push(category);
      setCategories(copyCategories);
    }

    let newId: number = 1;

    if (copyCards.length > 0) newId = copyCards[copyCards.length - 1].id + 1;

    copyCards.push({
      id: newId,
      title,
      category,
      todos: [],
    });

    setCards(copyCards);
    setCategory("");
    setTitle("");
    setİsCreating(false);
  };

  if (isCreating)
    return (
      <div className="create-card create-card--creating">
        <h3 className="create-card__header">NEW PROJECT</h3>

        <Input
          label="Kartın Başlığı"
          id="new-card"
          value={title}
          setValue={setTitle}
        />

        <Autocomplete
          id="category-select"
          options={todoState.categories}
          getOptionLabel={(category) => category}
          style={{ width: 300, marginTop: "1rem" }}
          freeSolo
          noOptionsText="Yeni Kategori"
          onChange={(event, value) => {
            if (value) setCategory(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Kategori seç"
              variant="standard"
              value={category}
              onChange={(e) => setCategory(e.currentTarget.value)}
            />
          )}
        />

        <div className="create-card__button-box create-card__button-box--creating">
          <Button
            clickHandler={() => setİsCreating(false)}
            text="CANCEL"
            color="danger"
          />

          <Button
            clickHandler={createHandler}
            text="CREATE"
            isDisabled={title.trim().length <= 0 || category.trim().length <= 0}
          />
        </div>
      </div>
    );

  return (
    <div className="create-card" onClick={() => setİsCreating(true)}>
      <h3 className="create-card__header">NEW PROJECT</h3>

      <div className="create-card__button-box">
        <Button clickHandler={() => {}} text="CREATE" isNotHovered={true} />
      </div>
    </div>
  );
}
