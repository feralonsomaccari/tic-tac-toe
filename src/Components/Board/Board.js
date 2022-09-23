import React, { useState, useEffect } from "react";
import styles from "./Board.module.css";
import Square from "./Square";
import {checkVictory} from './_utils'

const Board = ({setPlayer1Score, setPlayer2Score, setTieScore}) => {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const [board, setBoard] = useState([
    null, null, null,
    null, null, null,
    null, null, null,
  ]);

  const handleSquareClick = (position) => {
    if (currentPlayer === "X") setCurrentPlayer("O");
    if (currentPlayer === "O") setCurrentPlayer("X");
    const updateBoard = [...board];
    updateBoard[position] = currentPlayer
    
    setBoard(updateBoard);
  };

  /* Check victory after every move */
  useEffect(() => {
    const checkBoard = () => {
      if (checkVictory('X', board)) return setPlayer1Score(score => score +1)
      if (checkVictory('O', board)) return setPlayer2Score(score => score +1)
      if(!board.some(value => value === null)) return setTieScore(score => score +1)
    }
    checkBoard()

  }, [board]);

  return (
    <section className={styles.board}>
      {
        /* Render 9 squares in the Grid */
        Array(9).fill().map((_, index) => (
          <Square
            key={index}
            position={index}
            handleSquareClick={handleSquareClick}
            currentPlayer={currentPlayer} />
        ))
      }
    </section>
  );
};

export default Board;
