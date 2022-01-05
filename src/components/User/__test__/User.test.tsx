import { render, screen } from "@testing-library/react";
import User from "..";

const mockUserData = { id: 1, name: "test", username: "testtest", email: "test@test.com" };

describe("User", () => {
  it("will render user name", async () => {
    render(<User user={mockUserData} />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
