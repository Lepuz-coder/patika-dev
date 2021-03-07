import React, { useState } from "react";
import "./Input.scss";

type InputType = {
  label: string;
  top?: "1" | "2" | "3";
  id: string;
  value: string;
  setValue: (value: string) => void;
  isError?: boolean;
  errorText?: string;
};

export default function Input(props: InputType) {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <div
      className={`input-box ${
        props.top ? `input-box--top-${props.top}` : null
      }`}
    >
      <input
        id={props.id}
        type="text"
        className={`input-box__input  ${
          isFocus ? "input-box__input--focus" : null
        } ${props.isError ? "input-box__input--error" : null}`}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e) => props.setValue(e.currentTarget.value)}
        value={props.value}
      />

      <label
        htmlFor={props.id}
        className={`input-box__label ${
          props.isError ? "input-box__label--error" : null
        } ${
          isFocus || props.value.length > 0 ? "input-box__label--focus" : null
        }`}
      >
        {props.label}
      </label>

      {props.errorText && props.isError ? (
        <p className="input-box__error-text">{props.errorText}</p>
      ) : null}
    </div>
  );
}
