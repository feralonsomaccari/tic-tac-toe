import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Nav from "./Nav";

describe("<Nav/>", () => {
  it("should render <Nav/> component", () => {
    render(<Nav />, { wrapper: Router });
  });

  it("should render disabled PLAY button", () => {
    render(<Nav />, { wrapper: Router });
    const buttonEl = screen.getByText("PLAY");
    expect(buttonEl).toHaveClass("button button--disabled nav__link");
  });

  it("should render disabled PLAY button when path is /game", () => {
    render(
      <Router initialEntries={[{ pathname: "/game" }]}>
        <Nav />
      </Router>
    );
    const buttonEl = screen.getByText("PLAY");
    expect(buttonEl).toHaveClass("button button--disabled nav__link");
  });

  it("should render disabled LEADERBOARD button when path is /leaderboard", () => {
    render(
      <Router initialEntries={[{ pathname: "/leaderboard" }]}>
        <Nav />
      </Router>
    );
    const buttonEl = screen.getByText("LEADERBOARD");
    expect(buttonEl).toHaveClass("button button--disabled nav__link");
  });
});
