import React, { useState } from "react";
import GameHistoryBoard from "./Components/GameHistoryBoard/GameHistoryBoard";
import Menu from "./Components/Menu/Menu";
import Game from "./Components/Game/Game";
import { GameProvider } from "./GameContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";

function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="App">
      <GameProvider>
        <BrowserRouter>
            {showNav && <Nav></Nav>}
          <Routes>
            <Route path="/" element={<Menu setShowNav={setShowNav} />} />
            <Route path="/game" element={<Game setShowNav={setShowNav} />} />
            <Route path="/gamehistoryboard" element={<GameHistoryBoard setShowNav={setShowNav}/>} />
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </div>
  );
}

export default App;
