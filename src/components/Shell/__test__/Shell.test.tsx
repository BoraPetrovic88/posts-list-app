import { render, screen } from "@testing-library/react";
import Shell from "..";

describe("Shell", () => {
  it("will render child", () => {
    render(<Shell>test</Shell>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
