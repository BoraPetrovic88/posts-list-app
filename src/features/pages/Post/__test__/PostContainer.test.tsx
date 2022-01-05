import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Post from "../PostContainer";
import useGetPostById from "hook/useGetPostById";
import useGetUserById from "hook/useGetUserById";
import useGetCommentsByPostId from "hook/useGetCommentsByPostId";

const mockUseGetPostById = useGetPostById as jest.Mock;
jest.mock("hook/useGetPostById");
const mockOnePostData = { userId: 1, id: 1, title: "test123", body: "testetst" };

const mockUseGetUserById = useGetUserById as jest.Mock;
jest.mock("hook/useGetUserById");
const mockOneUserData = { id: 1, name: "Tester", username: "tester123", email: "test@test.com" };

const mockUseGetCommentsByPostId = useGetCommentsByPostId as jest.Mock;
jest.mock("hook/useGetCommentsByPostId");
const mockPostCommentsData = [
  {
    postId: 1,
    id: 1,
    name: "test.comment",
    email: "text.comment@test.com",
    body: "testetsetst",
  },
];

const mockImplementatin = () => {
  mockUseGetPostById.mockImplementationOnce(() => ({ post: mockOnePostData }));
  mockUseGetUserById.mockImplementationOnce(() => ({ user: mockOneUserData }));
  mockUseGetCommentsByPostId.mockImplementationOnce(() => ({ comments: mockPostCommentsData }));
  render(
    <BrowserRouter>
      <Post />
    </BrowserRouter>
  );
};

describe("PostContainer", () => {
  it("will render post user name", () => {
    mockImplementatin();
    expect(screen.getByText("Tester")).toBeInTheDocument();
  });

  it("will render post title", () => {
    mockImplementatin();
    expect(screen.getByText("Test123")).toBeInTheDocument();
  });

  it("will render post text", () => {
    mockImplementatin();
    expect(screen.getByText("Testetst")).toBeInTheDocument();
  });

  it("will render post user email", () => {
    mockImplementatin();
    expect(screen.getByTestId("user-name-email")).toHaveTextContent("text.comment");
  });

  it("will render post user email", () => {
    mockImplementatin();
    expect(screen.getByText("Test.comment")).toBeInTheDocument();
  });
});
