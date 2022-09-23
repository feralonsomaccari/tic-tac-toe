import React, { useState } from "react";
import styles from "./Board.module.css";
import Square from "./Square";

const Board = () => {

  const [currentPlayer, setCurrentPlayer] = useState('X')

  const handleSquareClick = () => {
    if(currentPlayer === 'X') setCurrentPlayer('O')
    if(currentPlayer === 'O') setCurrentPlayer('X')
  }

  return (
    <section className={styles.board}>
      {
        /* Render 9 squares in the Grid */
        Array(9).fill().map((_, index) => {
          return <Square key={index} handleSquareClick={handleSquareClick} currentPlayer={currentPlayer}></Square>
        })
      }
    </section>
  );
};

export default Board;
