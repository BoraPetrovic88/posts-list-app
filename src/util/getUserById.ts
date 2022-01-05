import { UserModel } from "api/users/type";

export const getUserById = (users: UserModel[], userId: number): UserModel => {
  let user: UserModel = { id: -1, name: "", username: "", email: "" };
  if (users) {
    user = users.find(({ id }) => id === userId) as UserModel;
  }
  return user;
};
