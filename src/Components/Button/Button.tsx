import React from "react";
import "./Button.scss";

type ButtonType = {
  text: string;
  isDisabled?: boolean;
  clickHandler: () => void;
};

export default function Button({ text, isDisabled, clickHandler }: ButtonType) {
  return (
    <button
      className={`button ${isDisabled ? "button--disabled" : null}`}
      onClick={!isDisabled ? clickHandler : undefined}
    >
      {text}
    </button>
  );
}
