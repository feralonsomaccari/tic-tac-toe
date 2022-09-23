import React, { useState } from "react";
import styles from "./Board.module.css";

const Square = ({ position, handleSquareClick, currentPlayer }) => {
  const [mark, setMark] = useState("");

  const handleClick = () => {
    setMark(currentPlayer);
    handleSquareClick(position);
  };

  return (
    <button className={styles.board__square} onClick={handleClick} disabled={mark}>
      {mark}
    </button>
  );
};

export default Square;
