import { describe, it } from "vitest";
import { render, screen } from "./utils/testUtils";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
    screen.getByText("Hello world!");
  });
});
