import React from "react";
import "./Button.scss";

type ButtonType = {
  text: string;
  isDisabled?: boolean;
  isNotHovered?: boolean;
  clickHandler: () => void;
  color?: "blue" | "danger";
};

export default function Button({
  text,
  isDisabled,
  clickHandler,
  isNotHovered,
  color,
}: ButtonType) {
  return (
    <button
      className={`button ${isDisabled ? "button--disabled" : null} ${
        isNotHovered ? "button--isnot-hovered" : null
      } ${color ? `button--${color}` : null}`}
      onClick={!isDisabled ? clickHandler : undefined}
    >
      {text}
    </button>
  );
}
