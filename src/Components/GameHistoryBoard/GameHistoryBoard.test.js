import React from "react";
import { render, screen } from "@testing-library/react";

import GameHistoryBoard from "./GameHistoryBoard";

describe("<GameHistoryBoard/>", () => {
  it("should render GameHistoryBoard component", () => {
    render(<GameHistoryBoard />);
  });
});
