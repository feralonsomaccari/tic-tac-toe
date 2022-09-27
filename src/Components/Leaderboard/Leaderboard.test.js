import React from "react";
import { render, screen } from "@testing-library/react";

import Leaderboard from "./Leaderboard";

describe("<Leaderboard/>", () => {
  it("should render Leaderboard component", () => {
    render(<Leaderboard />);
  });
});
