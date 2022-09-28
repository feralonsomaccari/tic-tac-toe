import React from "react";
import { render, screen } from "@testing-library/react";
import { GameProvider } from "../../GameContext";
import Leaderboard from "./Leaderboard";

describe("<Leaderboard/>", () => {
  it("should render Leaderboard component", () => {
    render(<Leaderboard />, { wrapper: GameProvider });
  });

  it("should not render the tables", () => {
    render(<Leaderboard />, { wrapper: GameProvider });

    const noTablesContent = screen.getByTestId("no-tables");
    expect(noTablesContent).toBeInTheDocument();
  });
});
