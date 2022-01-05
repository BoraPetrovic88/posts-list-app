import { render, screen } from "@testing-library/react";
import CommentBody from "..";
import { getUserNameFromEmail } from "util/getUserNameFromEmail";

const mockGetUserNameFromEmail = getUserNameFromEmail as jest.Mock;
jest.mock("util/getUserNameFromEmail");

afterEach(() => {
  jest.clearAllMocks();
});

describe("CommentBody", () => {
  it("will render correct name from function", () => {
    mockGetUserNameFromEmail.mockImplementationOnce(() => "Test");
    render(<CommentBody name="" email="" />);

    expect(screen.getByTestId("user-name-email")).toHaveTextContent("Test");
  });
});
