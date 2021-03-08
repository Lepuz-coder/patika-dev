import { useMediaQuery } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import ProfileIcon from "../../../Components/ProfileIcon/ProfileIcon";
import Categories from "./Categories/Categories";
import CloseIcon from "@material-ui/icons/Close";
import "./Menu.scss";
import { type } from "node:os";

export default function Menu() {
  const [isOpen, setİsOpen] = useState(false);
  const isMenuBreak = useMediaQuery("(max-width:1300px)");

  return (
    <>
      {!isOpen && isMenuBreak && (
        <div
          className="todo-list-container__menu__mobile-hamburger"
          onClick={() => setİsOpen(true)}
        >
          <div className="todo-list-container__menu__mobile-hamburger__bar"></div>
          <div className="todo-list-container__menu__mobile-hamburger__bar"></div>
          <div className="todo-list-container__menu__mobile-hamburger__bar"></div>
        </div>
      )}

      {isOpen && isMenuBreak && (
        <div
          className="todo-list-container__menu__bg"
          onClick={() => setİsOpen(false)}
        ></div>
      )}
      <AnimatePresence>
        {!isOpen && isMenuBreak ? null : (
          <motion.div
            animate={{
              x: 0,
              transition: {
                type: "just",
              },
            }}
            exit={{
              x: -1000,
              transition: {
                type: "just",
              },
            }}
            initial={{
              x: -1000,
            }}
            className="todo-list-container__menu"
          >
            {isMenuBreak && (
              <div
                className="todo-list-container__menu__mobile-close"
                onClick={() => setİsOpen(false)}
              >
                <CloseIcon />
              </div>
            )}
            <div className="todo-list-container__menu__profile">
              <div className="todo-list-container__menu__profile__icon">
                <ProfileIcon />
              </div>

              <div className="todo-list-container__menu__profile__full-name">
                Emirhan Durusoy
              </div>
            </div>

            <Categories />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
