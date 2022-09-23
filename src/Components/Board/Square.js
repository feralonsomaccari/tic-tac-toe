import React, { useState, useEffect } from "react";
import styles from "./Board.module.css";

const Square = ({ position, handleSquareClick, currentPlayer, gameCounter, isGameOver, winningLine}) => {
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
      {mark && 
      <span className={
        `${styles.board__mark} 
        ${styles[mark]} 
        ${isGameOver && (winningLine.includes(position) ? styles['board__mark--blinking'] : styles['board__mark--off'])}`}>
        {mark}
      </span>}
    </button>
  );
};

export default Square;
