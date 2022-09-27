import React from "react";
import styles from "./Button.module.css";

const Button = ({ disabled, children, extraClases = [] }) => (
  <button
    className={`${styles.button} ${disabled && styles["button--disabled"]} ${[
      ...extraClases,
    ]}`}
    disabled={disabled}>
    {children}
  </button>
);

export default Button;
