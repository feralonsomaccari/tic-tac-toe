import React from "react";
import styles from "./Menu.module.css";

const Form = ({ value = '', placeholder, setInput = () => '' }) => {
  return (
    <input
      className={styles.menu__input}
      onChange={(e) => setInput(e.target.value)}
      placeholder={placeholder}
      value={value}
    ></input>
  );
};

export default Form;
