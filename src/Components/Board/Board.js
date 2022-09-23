import React, { useState, useEffect } from "react";
import styles from "./Board.module.css";
import Square from "./Square";
import {checkVictory} from './_utils'

const BOARD_LAYOUT = [
  null, null, null,
  null, null, null,
  null, null, null,
]

const Board = ({setPlayer1Score, setPlayer2Score, setTieScore}) => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [board, setBoard] = useState(BOARD_LAYOUT);
  const [isGameOver, setIsGameOver] = useState(false)
  const [gameCounter, setGameCounter] = useState(1)

  const handleSquareClick = (position) => {
    if (currentPlayer === "X") setCurrentPlayer("O");
    if (currentPlayer === "O") setCurrentPlayer("X");
    const updateBoard = [...board];
    updateBoard[position] = currentPlayer
    
    setBoard(updateBoard);
  };

  const handleRestartClick = () => {
    setIsGameOver(false)
    setBoard(BOARD_LAYOUT)
    setGameCounter(counter => counter + 1)
  }

  /* Check victory after every move */
  useEffect(() => {
    const checkBoard = () => {
      if (checkVictory('X', board)) { 
        setPlayer1Score(score => score + 1)
        return setIsGameOver(true)
      }
      if (checkVictory('O', board)) {
        setPlayer2Score(score => score + 1)
        return setIsGameOver(true)
      }
      if(board.every(value => value !== null)) {
        setTieScore(score => score + 1)
        return setIsGameOver(true)
      }
    }
    checkBoard()

  }, [board]);

  return (
    <section className={styles.board}>
      {isGameOver && <div className={styles.board__restartOverlay} onClick={handleRestartClick}></div>}
      {
        /* Render 9 squares in the Grid */
        board.map((_, index) => (
          <Square
            key={index}
            position={index}
            handleSquareClick={handleSquareClick}
            currentPlayer={currentPlayer}
            gameCounter={gameCounter} />
        ))
      }
    </section>
  );
};

export default Board;
