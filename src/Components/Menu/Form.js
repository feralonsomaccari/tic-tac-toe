import React from "react";
import styles from "./Menu.module.css";

const Form = ({ inputName, placeholder, setInput }) => {
  return (
    <input
      className={styles.menu__input}
      onChange={(e) => setInput(e.target.value)}
      placeholder={placeholder}
    ></input>
  );
};

export default Form;
