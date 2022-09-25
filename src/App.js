import GameHistoryBoard from './Components/GameHistoryBoard/GameHistoryBoard'
import Menu from './Components/Menu/Menu'
import Game from "./Components/Game/Game";
import { GameProvider } from "./GameContext";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <GameHistoryBoard/>
        {/* <Game player1Name="Felipe" player2Name="Pedro" /> */}
        {/* <Menu/> */}
      </GameProvider>
    </div>
  );
}

export default App;
