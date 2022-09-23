import React from "react";
import styles from "./Board.module.css";
import Square from "./Square";

const Board = () => {
  return (
    <section className={styles.board}>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </section>
  );
};

export default Board;
