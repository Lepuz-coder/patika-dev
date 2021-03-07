import React, { useContext, useEffect, useState } from "react";
import "./Login.scss";
import LoginIcon from "../../Components/LoginIcon/LoginIcon";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { AppContext } from "../../context/AppStore";
import { useHistory } from "react-router";

export default function Login() {
  const { setUserData } = useContext(AppContext);

  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const history = useHistory();

  const getText = () => {
    const initalText = `Patika için geliştirilmiş olan todo uygulamasına hoş geldiniz.
        Uygulamaya başlamadan önce isminizi ve soyadınızı girmeniz
        gerekiyor.`;

    const splittedText = initalText.split("");

    let i = 0;
    const textInterval = setInterval(() => {
      const letter = splittedText[i];
      setText((oldText) => `${oldText}${letter}`);
      i++;

      if (i >= splittedText.length) {
        clearInterval(textInterval);
      }
    }, 30);
  };

  const loginHandler = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);

    setUserData({
      name,
      surname,
    });

    history.push("/yapilacaklar-listem");
  };

  useEffect(() => {
    getText();
  }, []);

  return (
    <div className="login-container">
      <div className="login-container__login-box">
        <div className="login-container__login-box__left">
          <LoginIcon />
        </div>

        <div className="login-container__login-box__right">
          <h1 className="login-container__login-box__right__title">
            Patika Todo Uygulaması
          </h1>

          <p className="login-container__login-box__right__text">{text}</p>

          <div className="login-container__login-box__right__inputs">
            <Input
              label="İsminiz"
              id="name"
              value={name}
              setValue={setName}
              isError={name.length < 3 && name.trim().length !== 0}
              errorText="İsim en az 3 karakter olmalıdır"
            />

            <Input
              label="Soyadınız"
              top="3"
              id="surname"
              value={surname}
              setValue={setSurname}
              isError={surname.length < 3 && surname.trim().length !== 0}
              errorText="Soyad en az 3 karakter olmalıdır"
            />
          </div>

          <div className="login-container__login-box__right__button-box">
            <Button
              text="GİRİŞ YAP"
              isDisabled={name.length < 3 || surname.length < 3}
              clickHandler={loginHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
