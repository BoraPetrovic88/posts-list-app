import axios from "axios";
import { UserModel } from "./type";
import { API_URL } from "config";

export const getUserById = async (postId: number): Promise<UserModel> => {
  const data = await axios
    .get<UserModel>(`${API_URL}/users/${postId}`)
    .then((response) => response.data);
  return data;
};
