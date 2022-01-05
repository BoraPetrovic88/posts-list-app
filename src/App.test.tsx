import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("will start initial test", async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const linkElement = screen.getAllByText("");
    // eslint-disable-next-line jest-dom/prefer-in-document
    expect(linkElement).toBeTruthy();
  });
});
