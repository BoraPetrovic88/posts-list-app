import { UserModel } from "api/users/type";

export const getUserByEmail = (users: UserModel[], email: string): UserModel => {
  let user: UserModel = { id: -1, name: "", username: "", email: "" };
  if (users) {
    user = users.find((user) => user.email === email) as UserModel;
  }
  return user;
};
