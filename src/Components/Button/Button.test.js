import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("<Button/>", () => {
  it("should render Button component", () => {
    render(<Button />);
  });

  it("should render a Disabled button", () => {
    render(<Button disabled={true} />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toHaveClass("button button--disabled");
  });

  it("should render a Enabled button", () => {
    render(<Button disabled={false} />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).not.toHaveClass("button button--disabled");
  });
});
