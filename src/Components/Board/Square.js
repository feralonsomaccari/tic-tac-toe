import React, { useState } from "react";
import styles from "./Board.module.css";

const Square = ({ handleSquareClick, currentPlayer }) => {
  const [mark, setMark] = useState("");

  const handleClick = () => {
    setMark(currentPlayer);
    handleSquareClick();
  };

  return (
    <button className={styles.board__square} onClick={handleClick} disabled={mark}>
      {mark}
    </button>
  );
};

export default Square;
