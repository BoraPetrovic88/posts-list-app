import { render, screen } from "@testing-library/react";
import Text from "..";

describe("Text", () => {
  it("will show capital letter text", () => {
    render(<Text text="test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
