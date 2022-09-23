import React from "react";
import styles from "./Board.module.css";

const Square = ({ children }) => (
  <div className={styles.board__square}>{children}</div>
);

export default Square;
