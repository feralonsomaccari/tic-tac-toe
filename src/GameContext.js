import { createContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameHistory, setGameHistory] = useState([]);
  const [gameId, setGameId] = useState(1);

  const addToGameHistory = (game) => {
    setGameId((prevGameId) => prevGameId + 1);
    game.gameId = gameId
    setGameHistory((prevHistory) => [...prevHistory,game ]);
  };

  return (
    <GameContext.Provider
      value={{
        gameHistory,
        addToGameHistory,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
