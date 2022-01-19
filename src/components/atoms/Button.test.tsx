/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./Button";

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    // screen.debug();

    expect(
      screen.getByText("Hello World - Frontend Challenge!")
    ).toBeInTheDocument();
  });
});
