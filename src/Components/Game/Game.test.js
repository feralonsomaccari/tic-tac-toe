import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { GameProvider } from "../../GameContext";
import Game from "./Game";

describe("<Game/>", () => {
  it("should render <Game/> component", () => {
    render(
        <GameProvider>
          <Router>
            <Game player1Name='Felipe' player2Name='Pedro'/>
          </Router>
        </GameProvider>
      );
  });
});
