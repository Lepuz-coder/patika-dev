import React from "react";
import Button from "../../../Components/Button/Button";
import "./CreateCard.scss";

export default function CreateCard() {
  return (
    <div className="create-card">
      <h3 className="create-card__header">NEW PROJECT</h3>

      <div className="create-card__button-box">
        <Button clickHandler={() => {}} text="CREATE" isNotHovered={true} />
      </div>
    </div>
  );
}
