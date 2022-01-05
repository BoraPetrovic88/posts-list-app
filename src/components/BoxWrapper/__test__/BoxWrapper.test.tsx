import { render, screen } from "@testing-library/react";
import BoxWrapper from "..";

describe("BoxWarpper", () => {
  it("will render text passed as child", () => {
    render(<BoxWrapper>test test</BoxWrapper>);
    expect(screen.getByText("test test")).toBeInTheDocument();
  });
});
