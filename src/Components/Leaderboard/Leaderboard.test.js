import React from "react";
import { render, screen } from "@testing-library/react";
import { GameProvider } from "../../GameContext";
import Leaderboard from "./Leaderboard";

describe("<Leaderboard/>", () => {
  it("should render Leaderboard component", () => {
    render(<Leaderboard />, { wrapper: GameProvider });
  });
});
