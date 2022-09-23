import React, { useState, useEffect } from "react";
import styles from "./Board.module.css";

const Square = ({ position, handleSquareClick, currentPlayer, gameCounter}) => {
  const [mark, setMark] = useState("");

  useEffect( () => {
    setMark("")
  }, [gameCounter]); 

  const handleClick = () => {
    setMark(currentPlayer);
    handleSquareClick(position);
  };

  return (
    <button className={styles.board__square} onClick={handleClick} disabled={mark}>
      {mark && <span className={styles.board__mark}>
        {mark}
      </span>}
    </button>
  );
};

export default Square;
