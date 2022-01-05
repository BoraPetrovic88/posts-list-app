import { render, screen } from "@testing-library/react";
import PostsBody from "..";

const mockUserData = { id: 1, name: "test", username: "testtest", email: "test@test.com" };

describe("PostBody", () => {
  it("will render component text and user", () => {
    render(<PostsBody title="dada" user={mockUserData} />);
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("Dada")).toBeInTheDocument();
  });
});
