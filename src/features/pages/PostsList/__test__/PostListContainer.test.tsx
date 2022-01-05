import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PostsList from "../PostsListContainer";
import usePosts from "hook/usePosts";
import { PostModel } from "api/posts/types";
import useUsers from "hook/useUsers";
import { UserModel } from "api/users/type";
import useComments from "hook/useComments";
import { CommentModel } from "api/comments/types";

const mockUsePosts = usePosts as jest.Mock;
jest.mock("hook/usePosts");
const mockPostsData: PostModel[] = [{ userId: 1, id: 1, title: "Test", body: "test test" }];

const mockUseUsers = useUsers as jest.Mock;
jest.mock("hook/useUsers");
const mockUsersData: UserModel[] = [
  { id: 1, name: "Tester", username: "test.test", email: "test@test.com" },
];

const mockUseComments = useComments as jest.Mock;
jest.mock("hook/useComments");
const mockCommentsData: CommentModel[] = [
  { postId: 1, id: 1, name: "Test", email: "test@test.com", body: "test tets " },
];

afterEach(() => {
  jest.clearAllMocks();
});

const mockImplementatin = () => {
  mockUsePosts.mockImplementationOnce(() => ({ posts: mockPostsData }));
  mockUseUsers.mockImplementationOnce(() => ({ users: mockUsersData }));
  mockUseComments.mockImplementationOnce(() => ({ comments: mockCommentsData }));
  render(
    <BrowserRouter>
      <PostsList />
    </BrowserRouter>
  );
};

describe("PostListContainer", () => {
  it("will input return value", () => {
    mockImplementatin();
    const inputField = screen.getByTestId("inner-input");
    fireEvent.change(inputField, { target: { value: "Best" } });
    expect((inputField as HTMLInputElement).value).toEqual("Best");
  });

  it("will render user name ", () => {
    mockImplementatin();
    expect(screen.getByText("Tester")).toBeInTheDocument();
  });

  it("will render title ", () => {
    mockImplementatin();
    // eslint-disable-next-line jest-dom/prefer-in-document
    expect(screen.getAllByText("Test")).toBeTruthy();
  });

  it("will render headline ", () => {
    mockImplementatin();
    expect(screen.getByText("Comments:")).toBeInTheDocument();
  });

  it("will render user name from email ", () => {
    mockImplementatin();
    expect(screen.getByTestId("user-name-email")).toHaveTextContent("test");
  });
});
