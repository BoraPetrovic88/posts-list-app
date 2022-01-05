import { render, screen } from "@testing-library/react";
import CommentsList from "../CommentsList";
import { filterCommentsByPostId } from "util/filterCommentsByPostId";
import { capitalizeFirstLetter } from "util/capitalizeFirstLetter";
import { getUserNameFromEmail } from "util/getUserNameFromEmail";

const mockGetCommentsByPostId = filterCommentsByPostId as jest.Mock;
jest.mock("util/filterCommentsByPostId");

const mockGetUserNameFromEmail = getUserNameFromEmail as jest.Mock;
jest.mock("util/getUserNameFromEmail");

const mockCapitalizeFirstLetter = capitalizeFirstLetter as jest.Mock;
jest.mock("util/capitalizeFirstLetter");

afterEach(() => {
  jest.clearAllMocks();
});

const commentsMock = [
  { postId: 1, id: 1, name: "test", email: "test@test.com", body: "test test" },
];
const commentsMockList = [
  { postId: 1, id: 1, name: "test", email: "test@test.com", body: "test test" },
  { postId: 2, id: 2, name: "test", email: "test@test.com", body: "test test" },
  { postId: 3, id: 3, name: "test", email: "test@test.com", body: "test test" },
];

describe("BoxWarpper", () => {
  it("will render text passes as child", () => {
    mockGetUserNameFromEmail.mockImplementationOnce(() => "Test");
    mockGetCommentsByPostId.mockImplementationOnce(() => commentsMock);
    mockCapitalizeFirstLetter.mockImplementationOnce(() => "test test");
    render(<CommentsList postComments={commentsMock} />);
    expect(screen.getByText("test test")).toBeInTheDocument();
    expect(screen.getByText("Comments:")).toBeInTheDocument();
    expect(screen.getByTestId("user-name-email")).toHaveTextContent("Test");
  });

  it("will render text /and more/", () => {
    mockGetCommentsByPostId.mockImplementationOnce(() => commentsMockList);
    render(<CommentsList postComments={commentsMockList} />);
    expect(screen.getByText("and 1 more")).toBeInTheDocument();
  });
});
