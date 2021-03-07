import React from "react";
import "./Button.scss";

type ButtonType = {
  text: string;
  isDisabled?: boolean;
  isNotHovered?: boolean;
  clickHandler: () => void;
};

export default function Button({
  text,
  isDisabled,
  clickHandler,
  isNotHovered,
}: ButtonType) {
  return (
    <button
      className={`button ${isDisabled ? "button--disabled" : null} ${
        isNotHovered ? "button--isnot-hovered" : null
      }`}
      onClick={!isDisabled ? clickHandler : undefined}
    >
      {text}
    </button>
  );
}
